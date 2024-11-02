import { Rating } from '@mui/material';
import { StarIcon } from 'lucide-react';
import Image from 'next/image';

interface MaterialDetailsProps {
	date: Date;
	rating: number;
	rateCount: number;
	author: string;
	authorAvatarLink: string;
	viewCount: number;
}

export default function MaterialDetails({
	date,
	rating,
	rateCount,
	author,
	authorAvatarLink,
	viewCount,
}: MaterialDetailsProps) {
	return (
		<div className='lg:flex flex-col lg:px-5 gap-8 text-xl sm600:text-2xl items-center lg:items-start place-items-center sm600:place-items-start grid grid-cols-1 sm600:grid-cols-2'>
			<div>
				<p className='font-semibold mb-2 items-start'>Data publikacji</p>
				<div className='flex flex-col gap-2'>
					<div className='flex flex-row gap-2 items-center'>
						<p className=''>
							{date.toLocaleDateString('pl-PL', {
								day: 'numeric',
								month: 'long',
								year: 'numeric',
							})}
						</p>
					</div>
				</div>
			</div>
			<div className=''>
				<p className='font-semibold mb-2'>Wyświetlenia</p>
				<div className='flex flex-row gap-1'>
					<p className='font-medium'>{viewCount}</p>
				</div>
			</div>
			<div>
				<p className='font-semibold mb-2'>Ocena</p>
				<div className='flex flex-row gap-1'>
					<p className='font-medium'>{rating.toFixed(2)}</p>
					<Rating
						name='text-feedback'
						value={rating}
						readOnly
						precision={0.1}
						emptyIcon={
							<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />
						}
					/>
					<p className=''>({rateCount})</p>
				</div>
			</div>
			<div>
				<p className='font-semibold mb-2'>Autor</p>
				<div className='flex flex-row gap-2 items-center'>
					<Image
						src={authorAvatarLink}
						alt='avatar'
						width={192}
						height={108}
						className='w-16 h-16 rounded-full border-2 border-blackSecond/10'
					/>
					<p>{author}</p>
				</div>
			</div>
		</div>
	);
}
