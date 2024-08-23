'use client';

import { useState } from 'react';

import Article from './Article';
import ArticleSettings from './ArticleSettings';

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


	return (
		<div className='flex w-full h-[75vh] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md '>
			<ArticleSettings
				articleList={articleList}
				setArticleList={setArticleList}
			
			/>
			<Article
				articleList={articleList}
				setArticleList={setArticleList}
		
			/>
		</div>
	);
}

export default Creator;
