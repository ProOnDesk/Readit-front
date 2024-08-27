import { Rating } from '@mui/material';
import { StarIcon } from 'lucide-react';
import Image from 'next/image';

interface OpinionProps {
	imageSrc: string;
	rating: number;
	review: string;
	authorName: string;
}

export default function Opinion({
	imageSrc,
	rating,
	review,
	authorName,
}: OpinionProps) {
	return (
		<div className='flex flex-col gap-2 border-l-2 border-mainGreen pl-4'>
			<div className='flex flex-1 items-center gap-5 p-2'>
				<Image
					src={imageSrc}
					alt={authorName}
					width={192}
					height={108}
					className='w-16 h-16 rounded-full border-2 border-blackSecond/10'
				/>
				<p className='text-lg font-medium line-clamp-1'>{authorName}</p>
			</div>
			<div className='flex-[5]'>
				<Rating
					value={rating}
					readOnly
					precision={0.5}
					emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />}
				/>
				<p>{review}</p>
			</div>
		</div>
	);
}
