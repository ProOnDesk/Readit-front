'use client';

import Link from 'next/link';
import ArticleItem from '../profile/ArticleItem';
import { CiEdit, CiTrash, CiViewBoard } from 'react-icons/ci';

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
	view_count: 1000000,
	title_image_url: 'https://petmex.pl/modules/blog/dataimages/Zdjecie-psa.jpg',
	rating: 4.5,
	rating_count: 1000000,
};

export default function MyArticleItem() {
	return (
		<div className='relative overflow-hidden shadow-xl group myArticleItem'>
			<span className='absolute w-full h-full z-10 duration-300 transition-colors'></span>
			<div
				className={`w-full absolute z-20 top-0 -translate-y-full bg-white grid grid-cols-3 border-[1px] border-b-0 rounded-t-md transition-transform duration-300 group-[.myArticleItem]:group-hover:translate-y-0 text-xs `}
			>
				<Link
					href={'pawel'}
					className='flex flex-col items-center font-medium rounded-tl-md py-2 hover:bg-mainGreenSecond hover:text-white transition-colors duration-300 outline-none focus:bg-mainGreenSecond focus:text-white'
				>
					<CiViewBoard className='text-2xl' />
					Wyświetl
				</Link>
				<Link
					href={'pawel'}
					className='flex flex-col items-center font-medium py-2 hover:bg-mainGreenSecond hover:text-white transition-colors duration-300 outline-none focus:bg-mainGreenSecond focus:text-white'
				>
					<CiEdit className='text-2xl' />
					Edytuj
				</Link>
				<button
					onClick={() => console.log('delete')}
					className='flex flex-col items-center font-medium rounded-tr-md py-2 hover:bg-red-400 hover:text-white transition-colors duration-300 outline-none focus:bg-red-400 focus:text-white '
				>
					<CiTrash className='text-2xl' />
					Usuń
				</button>
			</div>
			<ArticleItem article={article} className='pointer-events-none' />
		</div>
	);
}
