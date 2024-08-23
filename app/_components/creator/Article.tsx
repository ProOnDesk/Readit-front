import React from 'react';
import TitleElement from './TitleElement';
import TextElement from './TextElement';
import ImageElement from './ImageElement';

export default function Article({
	articleList,
	setArticleList,
	imageList,
	setImageList,
}: {
	articleList: { type: string; content: string }[];
	setArticleList: React.Dispatch<
		React.SetStateAction<{ type: string; content: string }[]>
	>;
	imageList: any;
	setImageList: any;
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
						<ImageElement
							index={index}
							element={element}
							articleList={articleList}
							setArticleList={setArticleList}
							imageList={imageList}
							setImageList={setImageList}
						/>
					) : null}
				</div>
			))}
		</div>
	);
}
