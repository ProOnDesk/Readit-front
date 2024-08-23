export default function ArticleForm({
	register,
	articleSettings,
	setArticleSettings,
}) {
	return (
		<div className='flex flex-row gap-5 w-full py-10'>
			<div className='flex flex-col gap-5 w-2/3'>
				<div className='flex flex-1 flex-col gap-1'>
					<label className='text-xl'>Tytuł</label>
					<input
						defaultValue='Lorem ipsum dolor sit amet'
						{...register('title')}
						type='text'
						className='rounded-md border-2 text-xl p-1'
					/>
				</div>
				<div className='flex flex-col justify-center gap-1'>
					<label className='text-xl'>Streszczenie</label>
					<textarea
						defaultValue='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores esse ut fuga dolorum eveniet explicabo placeat atque deserunt saepe laborum perspiciatis, itaque unde culpa quam, quisquam blanditiis laboriosam earum delectus illum perferendis possimus tempore fugit et! Earum deleniti ullam animi culpa sed consectetur perferendis, nisi ab soluta obcaecati ipsum dolor?'
						{...register('summary')}
						maxLength={500}
						className='rounded-md border-2 text-xl h-full p-1 min-h-28'
					/>
				</div>
			</div>
			<div className='flex flex-col  gap-1 w-1/3'>
				<label className='text-xl'>Zdjęcie</label>
				<input
					type='file'
					className='flex-1 rounded-md border-2 text-xl p-1'
					{...register('image')}
				/>
			</div>
		</div>
	);
}
