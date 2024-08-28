'use client';

import { Rating } from '@mui/material';
import { StarIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface MakeOpinionProps {
	articleId: number;
}

export default function MakeOpinion({ articleId }: MakeOpinionProps) {
	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const [rating, setRating] = useState<number | null>(null);
	const [review, setReview] = useState('');
	const isCompleted = rating !== null && review !== '';

	useEffect(() => {
		if (textAreaRef.current) {
			textAreaRef.current.style.height = '0px';
			const scrollHeight = textAreaRef.current.scrollHeight;
			textAreaRef.current.style.height = scrollHeight + 'px';
		}
	}, [textAreaRef, review]);

	return (
		<form className=' flex flex-col gap-3'>
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
				disabled={!isCompleted}
			>
				Skomentuj
			</button>
		</form>
	);
}

function InputAccent() {
	return (
		<div className='w-full h-[2px] bg-blackSecond/10 peer-focus:bg-mainGreen absolute bottom-0 duration-300 transition-colors'></div>
	);
}
