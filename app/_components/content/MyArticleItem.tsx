'use client';

import Link from 'next/link';
import ArticleItem from '../profile/ArticleItem';
import { CiEdit, CiTrash, CiViewBoard } from 'react-icons/ci';
import { Article } from '@/app/_redux/features/authApiSlice';
import Modal from '../ui/Modal';
import DeleteArticleModal from './DeleteArticleModal';

interface MyArticleItemProps {
	article: Article;
}

export default function MyArticleItem({ article }: MyArticleItemProps) {
	return (
		<div className='relative overflow-hidden shadow-xl group myArticleItem'>
			<span className='absolute w-full h-full z-10 duration-300 transition-colors'></span>
			<div
				className={`w-full absolute z-20 top-0 -translate-y-full bg-white grid grid-cols-3 border-[1px] border-b-0 rounded-t-md transition-transform duration-300 group-[.myArticleItem]:group-hover:translate-y-0 text-xs `}
			>
				<Link
					href={`/materials/view/${encodeURIComponent(article?.slug)}`}
					className='flex flex-col items-center font-medium rounded-tl-md py-2 hover:bg-mainGreenSecond hover:text-white transition-colors duration-300 outline-none focus:bg-mainGreenSecond focus:text-white'
				>
					<CiViewBoard className='text-2xl' />
					Wyświetl
				</Link>
				<Link
					href={`/app/edit/${encodeURIComponent(article?.slug)}`}
					className='flex flex-col items-center font-medium py-2 hover:bg-mainGreenSecond hover:text-white transition-colors duration-300 outline-none focus:bg-mainGreenSecond focus:text-white'
				>
					<CiEdit className='text-2xl' />
					Edytuj
				</Link>

				<Modal>
					<Modal.Open opens='editdesc'>
						<button className='flex flex-col items-center font-medium rounded-tr-md py-2 hover:bg-red-400 hover:text-white transition-colors duration-300 outline-none focus:bg-red-400 focus:text-white '>
							<CiTrash className='text-2xl' />
							Usuń
						</button>
					</Modal.Open>
					<Modal.Window name='editdesc'>
						<DeleteArticleModal
							onCloseModal={undefined as never}
							article={article}
						/>
					</Modal.Window>
				</Modal>
			</div>
			<ArticleItem article={article} className='pointer-events-none' />
		</div>
	);
}
