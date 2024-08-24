'use client';

import { useState } from 'react';

import Article from './Article';
import ArticleSettings from './ArticleSettings';
import ArticleForm from './ArticleForm';
import { useForm, SubmitHandler } from 'react-hook-form';
import { usePostArticleMutation } from '@/app/_redux/features/articleApiSLice';
import toast from 'react-hot-toast';

export type CreatorInputs = {
	title: string;
	summary: string;
	image: FileList | null;
	tags: string[];
};

function Creator() {
	const [articleList, setArticleList] = useState([
		{
			content_type: 'title',
			content: 'Lorem ipsum dolor sit amet.',
		},
		{
			content_type: 'image',
			content: '',
		},
		{
			content_type: 'text',
			content:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni neque cupiditate harum iure, ducimus autem! Eaque vel est totam reiciendis nulla vero, excepturi blanditiis ullam officiis distinctio aut nobis repellendus soluta sed corporis quod iusto quibusdam minima sunt voluptatum itaque! Corrupti earum mollitia ullam fugiat harum, reiciendis voluptatibus omnis sequi?',
		},
	]);
	const [tags, setTags] = useState<string[]>([]);
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		setError,
		clearErrors,
		formState: { errors },
	} = useForm<CreatorInputs>();
	const [postArticle] = usePostArticleMutation();
	const onSubmit: SubmitHandler<CreatorInputs> = async (data) => {
		if (data.image?.length === 0) {
			setError('image', { type: 'required', message: 'Zdjęcie jest wymagane' });
			return;
		}
		console.log(articleList);
		const filteredArticleList = articleList.filter(
			(article) => article.content !== ''
		);
		console.log(filteredArticleList);
		const imageList = filteredArticleList.filter(
			(article) => article.content_type === 'image'
		);
		const formData = new FormData();

		if (data.image) {
			formData.append('title_image', data.image[0]);
		}

		const article = {
			title: data.title,
			summary: data.summary,
			tags: tags.map((tag) => ({ value: tag })),
			content_elements: [...filteredArticleList],
		};
		console.log(article);
		formData.append('article', JSON.stringify(article));

		await Promise.all(
			imageList.map(async (element, index) => {
				const response = await fetch(element.content);
				const blob = await response.blob();
				const file = new File([blob], `image${index}.png`, { type: blob.type });
				formData.append('images_for_content_type_image', file);
			})
		);

		postArticle({ formData })
			.unwrap()
			.then((res) => {
				console.log(res);
				toast.success('Materiał został opublikowany!');
			})
			.catch((err) => {
				console.log(err);
				toast.error('Coś poszło nie tak...');
			});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
			<ArticleForm
				tags={tags}
				setTags={setTags}
				register={register}
				errors={errors}
				setValue={setValue}
				clearErrors={clearErrors}
			/>
			<div className='flex w-full h-[85vh] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md '>
				<ArticleSettings
					articleList={articleList}
					setArticleList={setArticleList}
				/>
				<Article
					articleList={articleList}
					watch={watch}
					setArticleList={setArticleList}
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

export default Creator;
