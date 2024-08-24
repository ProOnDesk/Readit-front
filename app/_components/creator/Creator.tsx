'use client';

import { useEffect, useState } from 'react';

import Article from './Article';
import ArticleSettings from './ArticleSettings';
import ArticleForm from './ArticleForm';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSendImagesMutation } from '@/app/_redux/features/articleApiSLice';

export type CreatorInputs = {
	title: string;
	summary: string;
	image: FileList | null;
};

function Creator() {
	const [articleList, setArticleList] = useState([
		{
			type: 'title',
			content: 'Lorem ipsum dolor sit amet.',
		},
		{
			type: 'image',
			content: '',
		},
		{
			type: 'text',
			content:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni neque cupiditate harum iure, ducimus autem! Eaque vel est totam reiciendis nulla vero, excepturi blanditiis ullam officiis distinctio aut nobis repellendus soluta sed corporis quod iusto quibusdam minima sunt voluptatum itaque! Corrupti earum mollitia ullam fugiat harum, reiciendis voluptatibus omnis sequi?',
		},
	]);
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		setError,
		clearErrors,
		formState: { errors },
	} = useForm<CreatorInputs>();
	const [sendImages] = useSendImagesMutation();
	const onSubmit: SubmitHandler<CreatorInputs> = async (data) => {
		if (data.image?.length === 0) {
			setError('image', { type: 'required', message: 'Zdjęcie jest wymagane' });
			return;
		}

		const imageList = articleList.filter((article) => article.type === 'image');
		const formData = new FormData();

		await Promise.all(
			imageList.map(async (element, index) => {
				const response = await fetch(element.content);
				const blob = await response.blob();
				const file = new File([blob], `image${index}.png`, { type: blob.type });
				formData.append('files', file);
			})
		);

		// Send the FormData
		sendImages({ formData })
			.unwrap()
			.then((res) => console.log(res))
			.catch((err) => console.log(err));

		console.log(formData.getAll('files'));
		console.log({ ...data, articleList });
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
			<ArticleForm
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
