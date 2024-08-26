import Image from 'next/image';

interface MaterialHeaderProps {
	imageLink: string;
	title: string;
	summary: string;
	tags: string[];
}

export default function MaterialHeader({
	imageLink,
	title,
	summary,
	tags,
}: MaterialHeaderProps) {
	return (
		<>
			<div className='relative overflow-hidden rounded-md'>
				<Image
					src={imageLink}
					alt={title}
					width={1920}
					height={1080}
					className='max-h-[600px] w-full object-cover'
				/>
				<div className='hidden md:block absolute bg-blackSecond/50 w-full h-full left-0 top-0'></div>
				<div className='hidden md:flex flex-col gap-10 absolute bottom-0 w-full justify-center text-white pb-2 md:pb-16 px-10 lg:max-w-[70%]'>
					<h1 className='text-5xl font-semibold'>{title}</h1>
					<p className='hidden md:block text-xl'>{summary}</p>
					<div className='hidden md:flex flex-wrap gap-3'>
						{tags.map((tag, index) => (
							<span
								key={index}
								className='text-md border-2 border-mainGreen font-semibold text-white px-4 py-2 rounded-full'
							>
								{tag}
							</span>
						))}
					</div>
				</div>
			</div>
			<div className='md:hidden flex flex-col gap-5'>
				<h1 className=' text-3xl text-center font-semibold'>{title}</h1>
				<p className='text-xl text-center'>{summary}</p>
				<div className='flex justify-center flex-wrap gap-1'>
					{tags.map((tag, index) => (
						<span
							key={index}
							className='text-sm border-2 border-mainGreen font-semibold text-black px-4 py-2 rounded-full'
						>
							{tag}
						</span>
					))}
				</div>
			</div>
		</>
	);
}
