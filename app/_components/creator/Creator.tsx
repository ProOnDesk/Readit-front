'use client';

import { useEffect, useState } from 'react';

import Article from './Article';
import ArticleSettings from './ArticleSettings';
import ArticleForm from './ArticleForm';
import { useForm, SubmitHandler } from 'react-hook-form';

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
			content:
				'https://blogcdn.gmass.co/blog/wp-content/uploads/2020/12/Featured-image-what-is-an-email-header-43kb.png',
		},
		{
			type: 'text',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lacus nec nunc ultricies gravida. Nulla facilisi. Nullam nec nunc nec sem tincidunt ultricies. Sed in lacus nec nunc ultricies gravida. Nulla facilisi. Nullam nec nunc nec sem tincidunt ultricies.',
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

	const onSubmit: SubmitHandler<CreatorInputs> = (data) => {
		if (data.image?.length === 0) {
			setError('image', { type: 'required', message: 'Zdjęcie jest wymagane' });
			return;
		}
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<ArticleForm
				register={register}
				errors={errors}
				setValue={setValue}
				clearErrors={clearErrors}
			/>
			<button type='submit'>Potwierdz</button>

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
		</form>
	);
}

export default Creator;
