'use client';

import {
	useAddArticleToFavouritesMutation,
	useBuyArticleMutation,
} from '@/app/_redux/features/articleApiSLice';
import toast from 'react-hot-toast';
import { FaHeart } from 'react-icons/fa';

interface ManageArticleProps {
	is_free: boolean;
	price: number;
	articleId: number;
}
export default function ManageArticle({
	is_free,
	price,
	articleId,
}: ManageArticleProps) {
	const [buyArticle] = useBuyArticleMutation();
	const [addArticleToFavourites] = useAddArticleToFavouritesMutation();

	function handleBuyArticle() {
		buyArticle({ article_id: articleId })
			.unwrap()
			.then(() => {
				toast.success('Zakupiono materiał');
			})
			.catch((error) => {
				// console.log('Error buying article', error);
				toast.error('Nie udało się zakupić materiału');
			});
	}
	function handleAddArticleToFavourites() {
		addArticleToFavourites({ article_id: articleId })
			.unwrap()
			.then(() => {
				toast.success('Dodano materiał do ulubionych');
			})
			.catch((error) => {
				// console.log('Error buying article', error);
				toast.error('Nie udało się dodać materiału do ulubionych');
			});
	}

	return (
		<div className='mb-16 flex flex-col gap-5 min-w-60 px-4 rounded-md'>
			<p className='text-3xl font-semibold text-center'>
				{is_free ? 'Bezpłatny' : `${price} zł`}
			</p>

			<div className='flex flex-row gap-2'>
				<button
					type='button'
					onClick={handleBuyArticle}
					className='flex-[3] text-center rounded-full bg-mainGreen text-white text-xl font-medium hover:bg-mainGreenSecond transition-colors duration-300 px-2 py-2'
				>
					{is_free ? 'Zapisz się' : 'Kup teraz'}
				</button>
				<button
					type='button'
					onClick={handleAddArticleToFavourites}
					className='flex-1 flex justify-center items-center rounded-full border-mainGreen border-2 hover:text-white text-2xl text-mainGreen font-medium hover:bg-mainGreenSecond transition-colors duration-300 aspect-square'
				>
					<FaHeart />
				</button>
			</div>
		</div>
	);
}
