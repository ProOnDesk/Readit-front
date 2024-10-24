'use client';

import {
	useGetArticleInfoToEditMutation,
	useUpdateArticleMutation,
} from '@/app/_redux/features/articleApiSLice';
import { useEffect, useState } from 'react';
import ArticleForm from './ArticleForm';
import ArticleSettings from './ArticleSettings';
import Article from './Article';
import { set, SubmitHandler, useForm } from 'react-hook-form';
import Spinner from '../ui/Spinner';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

interface EditorProps {
	materialSlug: string;
}

type CreatorInputs = {
	title: string;
	summary: string;
	image: FileList | null;
	tags: string[];
};

type Article = {
	content_type: string;
	content: string;
};

export default function Editor({ materialSlug }: EditorProps) {
	const [
		getArticleInfoToEdit,
		{ data: articleInfo, isLoading: isArticleInfoLoading, error },
	] = useGetArticleInfoToEditMutation();
	const [updateArticle, { isLoading: isArticleUpdating }] =
		useUpdateArticleMutation();
	const [tags, setTags] = useState(articleInfo?.tags);
	const [articleList, setArticleList] = useState(articleInfo?.content_elements);
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		setError,
		clearErrors,
		formState: { errors },
	} = useForm<CreatorInputs>();

	const image = articleInfo?.title_image_url;
	const router = useRouter();

	if (error && 'status' in error && error.status === 401) {
		router.push('/');
	}

	useEffect(() => {
		getArticleInfoToEdit({ article_slug: materialSlug });
	}, [materialSlug, getArticleInfoToEdit]);

	useEffect(() => {
		setArticleList(articleInfo?.content_elements);
		setTags(articleInfo?.tags.map((tag: { value: string }) => tag.value));
		setValue('title', articleInfo?.title);
		setValue('summary', articleInfo?.summary);
	}, [articleInfo, setValue]);

	const onSubmit: SubmitHandler<CreatorInputs> = async (data) => {
		const filteredArticleList = articleList.filter(
			(article: Article) => article.content !== ''
		);

		const modifiedArticleList = filteredArticleList.map((article: Article) => {
			if (article.content_type === 'image') {
				return {
					...article,
					content: article.content.includes('blob') ? '' : article.content,
				};
			}
			return article;
		});

		const imageList = filteredArticleList.filter(
			(article: Article) =>
				article.content_type === 'image' && article.content.includes('blob')
		);

		const formData = new FormData();

		if (data?.image && data.image?.length > 0) {
			formData.append('title_image', data.image[0]);
		}

		const article = {
			title: data.title,
			summary: data.summary,
			tags: tags.map((tag: { value: string }) => ({ value: tag })),
			content_elements: [...modifiedArticleList],
		};
		formData.append('article', JSON.stringify(article));

		if (imageList && imageList.length > 0) {
			await Promise.all(
				imageList.map(async (element: Article, index: number) => {
					const response = await fetch(element.content);
					const blob = await response.blob();
					const file = new File([blob], `image${index}.png`, {
						type: blob.type,
					});
					formData.append('images_for_content_type_image', file);
				})
			);
		}

		updateArticle({ formData, article_id: articleInfo?.id })
			.unwrap()
			.then((res) => {
				toast.success('Materiał został zaktualizowany!');
				router.replace(`/app/content`);
			})
			.catch((err) => {
				toast.error('Wystąpił błąd podczas aktualizacji materiału');
				// console.log(err);
			});
	};

	if (isArticleInfoLoading || isArticleUpdating)
		return <Spinner color='green' size='big' />;

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
			<ArticleForm
				tags={tags}
				setTags={setTags}
				register={register}
				errors={errors}
				setValue={setValue}
				clearErrors={clearErrors}
				actualImage={image}
			/>
			<div className='relative flex w-full h-[85vh] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md overflow-hidden'>
				<ArticleSettings
					articleList={articleList}
					setArticleList={setArticleList}
				/>
				<Article
					articleList={articleList}
					watch={watch}
					setArticleList={setArticleList}
					actualImage={image}
				/>
			</div>
			<button
				className='text-center rounded-full bg-mainGreen text-white font-medium text-2xl hover:bg-mainGreenSecond transition-colors duration-300 px-6 py-2 mx-auto mt-10'
				type='submit'
			>
				Opublikuj
			</button>
		</form>
	);
}
