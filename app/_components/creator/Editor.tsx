'use client';

import { useGetArticleInfoToEditMutation } from '@/app/_redux/features/articleApiSLice';
import { useEffect, useState } from 'react';
import ArticleForm from './ArticleForm';
import ArticleSettings from './ArticleSettings';
import Article from './Article';
import { set, SubmitHandler, useForm } from 'react-hook-form';

interface EditorProps {
	materialSlug: string;
}

type CreatorInputs = {
	title: string;
	summary: string;
	image: FileList | null;
	tags: string[];
};

type ArticleElement = {
	content_type: string;
	content: string;
};

export default function Editor({ materialSlug }: EditorProps) {
	const [getArticleInfoToEdit, { data: articleInfo }] =
		useGetArticleInfoToEditMutation();
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
		console.log(data);
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
			<div className='relative flex w-full h-[85vh] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md overflow-hidden'>
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
