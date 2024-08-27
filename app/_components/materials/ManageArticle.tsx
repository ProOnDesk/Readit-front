'use client';

import { useBuyArticleMutation } from '@/app/_redux/features/articleApiSLice';
import toast from 'react-hot-toast';

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

	function handleBuyArticle() {
		buyArticle({ article_id: articleId })
			.unwrap()
			.then((res) => {
				console.log(res);
				toast.success('Zakupiono artykuł');
			})
			.catch((error) => {
				console.log('Error buying article', error);
				toast.error('Nie udało się zakupić artykułu');
			});
	}

	return (
		<div className='mb-16 flex flex-col gap-5 min-w-60 px-4 rounded-md'>
			<p className='text-3xl font-semibold text-center'>
				{is_free ? 'Bezpłatny' : `${price} zł`}
			</p>

			<button
				type='button'
				onClick={handleBuyArticle}
				className='text-center rounded-full bg-mainGreen text-white text-xl font-medium hover:bg-mainGreenSecond transition-colors duration-300 px-6 py-2'
			>
				{is_free ? 'Zapisz się' : 'Kup teraz'}
			</button>
		</div>
	);
}
