'use client';

import { useMakeOpinionMutation } from '@/app/_redux/features/articleApiSLice';
import { useRetrieveUserQuery } from '@/app/_redux/features/authApiSlice';
import { Rating } from '@mui/material';
import { StarIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import Spinner from '../ui/Spinner';

interface MakeOpinionProps {
	articleId: number;
	authorId: number;
}

export default function MakeOpinion({ articleId, authorId }: MakeOpinionProps) {
	const [isClient, setIsClient] = useState(false);
	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const { data: user } = useRetrieveUserQuery();
	const [rating, setRating] = useState<number | null>(null);
	const [review, setReview] = useState('');
	const isCompleted = rating !== null && review !== '';
	const [makeOpinion, { isLoading: isMakeOpinionLoading }] =
		useMakeOpinionMutation();

	useEffect(() => {
		if (textAreaRef.current) {
			textAreaRef.current.style.height = '0px';
			const scrollHeight = textAreaRef.current.scrollHeight;
			textAreaRef.current.style.height = scrollHeight + 'px';
		}
	}, [textAreaRef, review]);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		makeOpinion({ article_id: articleId, rating, content: review })
			.unwrap()
			.then(() => {
				setRating(null);
				setReview('');
				toast.success('Komentarz dodany pomyślnie');
			})
			.catch(() => {
				toast.error('Nie udało się dodać kometarza');
			});
	}
	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) return null;

	if (user?.id === authorId) return null;

	return (
		<form onSubmit={handleSubmit} className=' flex flex-col gap-3'>
			<div className='flex flex-row justify-between items-center'>
				<label className='text-2xl font-medium'>Twoja opinia</label>
				<Rating
					name='text-feedback'
					value={rating}
					onChange={(event, newValue) => {
						setRating(newValue);
					}}
					precision={1}
					emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />}
				/>
			</div>
			<div className='relative '>
				<textarea
					ref={textAreaRef}
					placeholder='Dodaj komentarz'
					value={review}
					onChange={(e) => setReview(e.target.value)}
					className='w-full rounded-t-md text-xl p-1 px-2 focus:outline-none peer bg-transparent resize-none max-h-[500px]'
				/>
				<InputAccent />
			</div>

			<button
				className={`self-end py-2 px-6 w-full sm400:w-auto text-white  font-medium rounded-full transition-all duration-300  ${
					!isCompleted
						? 'bg-blackSecond/15'
						: 'bg-mainGreen hover:bg-mainGreenSecond'
				}`}
				disabled={!isCompleted || isMakeOpinionLoading}
			>
				{isMakeOpinionLoading ? (
					<Spinner color='white' size='small'></Spinner>
				) : (
					'Skomentuj'
				)}
			</button>
		</form>
	);
}

function InputAccent() {
	return (
		<div className='w-full h-[2px] bg-blackSecond/10 peer-focus:bg-mainGreen absolute bottom-0 duration-300 transition-colors'></div>
	);
}
