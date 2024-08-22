import React from 'react';
import TitleElement from './TitleElement';
import TextElement from './TextElement';

export default function Article({
	articleList,
	setArticleList,
}: {
	articleList: { type: string; content: string }[];
	setArticleList: React.Dispatch<
		React.SetStateAction<{ type: string; content: string }[]>
	>;
}) {
	return (
		<div className='flex flex-col items-center w-3/4 py-10 overflow-y-scroll'>
			{articleList.map((element, index) => (
				<div key={index} className='px-5 pb-5 w-full'>
					{element?.type === 'title' ? (
						<TitleElement
							element={element}
							index={index}
							setArticleList={setArticleList}
						/>
					) : element?.type === 'text' ? (
						<TextElement
							element={element}
							index={index}
							setArticleList={setArticleList}
						/>
					) : element?.type === 'image' ? (
						<img
							src={element?.content}
							alt='article image'
							className='w-full rounded-sm'
						/>
					) : null}
				</div>
			))}
		</div>
	);
}
