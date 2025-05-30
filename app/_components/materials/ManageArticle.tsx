'use client';

import {
	useChangeArticleFavoritesMutation,
	useCheckIsBoughtQuery,
	useCheckIsWishedQuery,
} from '@/app/_redux/features/articleApiSLice';
import { useRetrieveUserQuery } from '@/app/_redux/features/authApiSlice';
import { useAppSelector } from '@/app/_redux/hooks';
import { redirect, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaHeart, FaHeartBroken } from 'react-icons/fa';
import Spinner from '../ui/Spinner';
import { usePayForArticlesMutation } from '@/app/_redux/features/transactionsApiSlice';

interface ManageArticleProps {
	is_free: boolean;
	price: number;
	articleId: number;
	userId: number;
	slug?: string;
}
export default function ManageArticle({
	is_free,
	price,
	articleId,
	userId,
	slug = '',
}: ManageArticleProps) {
	const router = useRouter();
	const [isClient, setIsClient] = useState(false);
	const { data: user, isLoading: isUserLoading } = useRetrieveUserQuery();
	const isAuth = useAppSelector((state) => state.auth.isAuthenticated);
	const {
		data: isBought,
		refetch: refechIsBought,
		isLoading: isBoughtLoading,
	} = useCheckIsBoughtQuery({
		article_id: articleId,
	});
	const {
		data: isWished,
		refetch: refechIsWished,
		isLoading: IsWishedLoading,
	} = useCheckIsWishedQuery({
		article_id: articleId,
	});
	const [payForArticles, { isLoading: isArticleBuying }] =
		usePayForArticlesMutation();
	const [changeArticleFavorites, { isLoading: isArticleFavoritesChanging }] =
		useChangeArticleFavoritesMutation();

	const isArticleAuthor = user?.id === userId;

	function handleBuyArticle() {
		if (!isAuth) {
			toast.error('Musisz być zalogowany, aby zakupić materiał');
			return;
		}
		payForArticles({ article_ids: [articleId] })
			.unwrap()
			.then((data) => {
				if (data?.redirect_url) {
					router.push(data?.redirect_url);
				} else {
					refechIsBought();
					toast.success('Materiał został zakupiony');
				}
			})
			.catch((error) => {
				toast.error('Nie udało się zakupić materiału');
			});
	}

	function handleNavigateToArticle() {
		router.push(`/materials/view/${encodeURIComponent(slug)}`);
	}

	function handleAddArticleToFavourites() {
		if (!isAuth) {
			toast.error('Musisz być zalogowany, aby dodać materiał to ulubionych');
			return;
		}
		changeArticleFavorites({ article_id: articleId })
			.unwrap()
			.then((res) => {
				refechIsWished();
				toast.success(res?.detail);
			})
			.catch((error) => {
				toast.error('Nie udało się edytować listy ulubionych');
			});
	}

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) {
		return null;
	}

	return (
		<div className='mb-16 flex flex-col gap-5 sm:min-w-60 px-4 rounded-md'>
			<p className='text-3xl font-semibold text-center'>
				{is_free ? 'Bezpłatny' : `${price.toFixed(2)} zł`}
			</p>

			<div className='flex flex-row gap-2 max-h-[65px]'>
				{isArticleAuthor || isBought ? (
					<button
						type='button'
						onClick={handleNavigateToArticle}
						className='flex-[3] text-center rounded-full bg-mainGreen text-white text-xl font-medium hover:bg-mainGreenSecond transition-colors duration-300 px-2 py-2'
					>
						Przeczytaj
					</button>
				) : (
					<button
						type='button'
						onClick={handleBuyArticle}
						disabled={isArticleBuying}
						className='flex-[3] text-center rounded-full bg-mainGreen text-white text-xl font-medium hover:bg-mainGreenSecond transition-colors duration-300 px-2 py-2'
					>
						{isArticleBuying ? (
							<Spinner color='white' size='small' />
						) : is_free ? (
							'Zapisz się'
						) : (
							'Kup teraz'
						)}
					</button>
				)}

				{isAuth && !isArticleAuthor ? (
					<button
						type='button'
						onClick={handleAddArticleToFavourites}
						disabled={isArticleFavoritesChanging}
						className={`flex-1 flex justify-center items-center rounded-full border-mainGreen border-2  text-2xl  font-medium  transition-colors duration-300 aspect-square max-w-[65px] bg-white text-mainGreen hover:text-mainGreenSecond hover:border-mainGreenSecond`}
					>
						{isArticleFavoritesChanging ? (
							<Spinner color={'green'} size='small' />
						) : (
							<>{!isWished ? <FaHeart /> : <FaHeartBroken />}</>
						)}
					</button>
				) : null}
			</div>
		</div>
	);
}
