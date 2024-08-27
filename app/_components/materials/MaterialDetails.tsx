import { Rating } from '@mui/material';
import { StarIcon } from 'lucide-react';
import Image from 'next/image';

interface MaterialDetailsProps {
	date: Date;
	rating: number;
	rateCount: number;
	author: string;
	authorAvatarLink: string;
}

export default function MaterialDetails({
	date,
	rating,
	rateCount,
	author,
	authorAvatarLink,
}: MaterialDetailsProps) {
	return (
		<div className='flex flex-col gap-8 text-2xl items-center md:items-start'>
			<div>
				<p className='font-semibold mb-2 items-start'>Data publikacji</p>
				<div className='flex flex-col gap-2 text-2xl'>
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
			<div>
				<p className='font-semibold mb-2'>Ocena</p>
				<div className='flex flex-row gap-1 text-2xl'>
					<p className='text-xl font-medium'>{rating}</p>
					<Rating
						name='text-feedback'
						value={rating}
						readOnly
						precision={0.1}
						emptyIcon={
							<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />
						}
					/>
					<p className='text-xl'>({rateCount})</p>
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
