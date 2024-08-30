import React from 'react';
import TitleElement from './TitleElement';
import TextElement from './TextElement';
import ImageElement from './ImageElement';
import Image from 'next/image';

export default function Article({
	articleList,
	setArticleList,
	watch,
}: {
	articleList: { content_type: string; content: string }[];
	setArticleList: React.Dispatch<
		React.SetStateAction<{ content_type: string; content: string }[]>
	>;
	watch: any;
}) {
	const imageUrl =
		watch('image') && watch('image').length > 0
			? URL.createObjectURL(watch('image')[0])
			: null;

	return (
		<div className='flex flex-col items-center md:w-3/4 py-10 overflow-y-scroll'>
			<p className='text-center text-5xl mb-2 px-5'>
				{watch('title') ?? 'Chwytliwy tytuł, który zszokuje? Śmiało!'}
			</p>
			<p className='text-gray-600 mb-2 text-lg'>
				{new Date().toLocaleDateString('pl-PL', {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
				})}
			</p>
			<p className='text-center mx-5 mb-5 text-md'>
				{watch('summary') ??
					'Podsumuj w dwóch zdaniach, zanim skończy się kawa...'}
			</p>
			<div className=' w-full h-auto max-h-[500px] mb-10'>
				<Image
					src={imageUrl ?? '/placeholder-image.jpg'}
					alt='Zdjęcie tytułowe'
					width={1920}
					height={1080}
					className='object-cover w-full max-h-full h-auto object-center'
				/>
			</div>
			{articleList.map((element, index) => (
				<div key={index} className='px-5 pb-5 w-full'>
					{element?.content_type === 'title' ? (
						<TitleElement
							element={element}
							index={index}
							setArticleList={setArticleList}
						/>
					) : element?.content_type === 'text' ? (
						<TextElement
							element={element}
							index={index}
							setArticleList={setArticleList}
						/>
					) : element?.content_type === 'image' ? (
						<ImageElement
							index={index}
							element={element}
							articleList={articleList}
							setArticleList={setArticleList}
						/>
					) : null}
				</div>
			))}
		</div>
	);
}
