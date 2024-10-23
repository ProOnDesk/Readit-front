'use client';

import { useState } from 'react';
import ArticleItem from '../profile/ArticleItem';

const article = {
	title: 'How to Start with React in 2024',
	summary:
		"A beginner's guide to setting up a React development environment and building your first app in 2024.",
	tags: [{ value: 'React' }, { value: 'JavaScript' }, { value: 'Frontend' }],
	is_free: true,
	price: 0,
	id: 1,
	author: {
		id: 100,
		first_name: 'John',
		last_name: 'Doe',
		avatar_url:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-j4AqENfW4Cr3Q6602onG4NsC0VUDep7WRw&s',
	},
	slug: 'how-to-start-with-react-2024',
	created_at: new Date(),
	view_count: 1250,
	title_image_url: 'https://petmex.pl/modules/blog/dataimages/Zdjecie-psa.jpg',
	rating: 4.5,
	rating_count: 100,
};

export default function MyArticleItem() {
	const [isOpen, setIsOpen] = useState(false);

	function handleClick() {
		setIsOpen((isOpen) => !isOpen);
	}
	console.log(isOpen);

	return (
		<div className='relative overflow-hidden shadow-xl '>
			<button
				onClick={handleClick}
				className='absolute w-full h-full hover:bg-gray-100/30 z-10 duration-300 transition-colors hover:cursor-pointer'
			></button>
			<div
				className={`w-full absolute z-20 bottom-0 bg-white flex flex-row justify-around py-10 border-t-2 transition-transform duration-300 ${
					isOpen && 'translate-y-full'
				}`}
			>
				<p>test </p>
				<p>test </p>
				<p>test </p>
			</div>
			<ArticleItem article={article} className='pointer-events-none' />
		</div>
	);
}
