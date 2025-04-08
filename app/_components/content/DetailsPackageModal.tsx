import {
	useBuyCollectionMutation,
	useGetCollectionByIdMutation,
} from '@/app/_redux/features/collectionsApiSlice';
import React, { useEffect } from 'react';
import { RxCross1 } from 'react-icons/rx';
import Spinner from '../ui/Spinner';
import { TiStar } from 'react-icons/ti';
import Link from 'next/link';
import { Rating } from '@mui/material';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { usePayForArticlesMutation } from '@/app/_redux/features/transactionsApiSlice';

interface DetailsPackageModalProps {
	packageId: number;
	isCreator?: boolean;
	onCloseModal: () => void;
}

export default function DetailsPackageModal({
	packageId,
	isCreator,
	onCloseModal,
}: DetailsPackageModalProps) {
	const router = useRouter();
	const [
		getCollectionDetails,
		{ isLoading: isLoadingDetails, data: collection },
	] = useGetCollectionByIdMutation();
	const [payForArticles, { isLoading: isArticleBuying }] =
		usePayForArticlesMutation();

	function handleBuyCollection() {
		payForArticles({
			article_ids: collection?.articles_id,
			discounted_price: collection?.price,
		})
			.unwrap()
			.then((data) => {
				if (data?.redirect_url) {
					router.push(data?.redirect_url);
				} else {
					toast.success(
						'Zakupiono zestaw, materiały zostały dodane do twojej biblioteki'
					);
				}
				onCloseModal();
			})
			.catch(() => {
				toast.error('Wystąpił błąd podczas zakupu zestawu');
				console.log('Error');
			});
	}

	useEffect(() => {
		if (packageId) {
			getCollectionDetails({ collection_id: packageId });
		}
	}, [packageId, getCollectionDetails]);

	return (
		<div>
			{isLoadingDetails ? (
				<div className='h-[80vh] flex justify-center items-center'>
					<Spinner color='green' />
				</div>
			) : (
				<>
					<div className='flex w-full justify-between items-center '>
						<p className='font-medium text-2xl'>{collection?.title}</p>
						<button
							onClick={onCloseModal}
							className='p-1 hover:bg-whiteSecond transition-colors duration-300 rounded-md'
						>
							<RxCross1 size={24} />
						</button>
					</div>
					<div className='w-full flex flex-col justify-center items-center gap-3 mt-5'>
						<div className='w-full'>
							<div className='flex justify-between items-center w-full'>
								<p className='p-1 text-lg'>Opis zestawu:</p>
								<div className='flex justify-center items-center gap-1'>
									<p className='font-medium'>
										{collection?.rating.toPrecision(3)}
									</p>
									<Rating
										value={collection?.rating}
										readOnly
										precision={0.1}
										size='small'
									/>
								</div>
							</div>
							<p className='w-full p-1 text-left'>
								{collection?.short_description}
							</p>
						</div>
						<div className='w-full flex flex-col justify-center items-center p-1'>
							<p className='text-lg font-semibold w-full text-left'>
								Zestaw zawiera {collection?.articles_count} materiały
							</p>
							<div className='space-y-1 my-5 min-h-36 w-full'>
								{collection?.articles.map((article) => (
									<Link
										key={article.id}
										target='_blank'
										href={`/materials/${encodeURIComponent(article.slug)}`}
										className='w-full flex flex-col sm500:flex-row justify-between items-end sm500:items-center py-2 px-2 gap-2 hover:bg-whiteSecond transition-colors duration-300 rounded-md'
									>
										<div className='flex justify-start items-center gap-3 w-full'>
											<div className='h-[50px] aspect-video relative'>
												<Image
													src={article.title_image_url}
													alt={article.title}
													fill
													className='object-cover object-center'
												/>
											</div>
											<p className='line-clamp-2'>{article.title}</p>
										</div>
										<div>
											{article.is_free ? (
												<p className='text-right font-bold'>Bezpłatny</p>
											) : (
												<p className='text-right font-bold'>
													{article.price.toFixed(2)} PLN
												</p>
											)}
										</div>
									</Link>
								))}
							</div>
						</div>

						<div className='w-full flex justify-end items-center'>
							{isCreator ? (
								<Link
									href='/app/content'
									className='border border-stone-300 rounded-md px-4 py-2'
								>
									Zarządzaj
								</Link>
							) : (
								<button
									type='submit'
									disabled={isArticleBuying}
									onClick={handleBuyCollection}
									className='bg-mainGreen hover:bg-mainGreenSecond transition-colors duration-300 text-white rounded-md px-4 py-2'
								>
									Zakup zestaw
								</button>
							)}
						</div>
					</div>
				</>
			)}
		</div>
	);
}
