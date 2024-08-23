import FileUploader from '../FileUploader';

export default function ArticleForm({
	register,
	errors,
}: {
	register: any;
	errors: any;
}) {
	return (
		<div className='flex flex-row gap-5 w-full py-10'>
			<div className='flex flex-col gap-5 w-2/3'>
				<div className='flex flex-1 flex-col gap-1'>
					<label className='text-xl'>Tytuł</label>
					<input
						defaultValue='Lorem ipsum dolor sit amet'
						{...register('title', { required: 'Tytuł jest wymagany' })}
						type='text'
						className='rounded-md border-2 text-xl p-1'
					/>
					<ErrorMessage>{errors?.title?.message}</ErrorMessage>
				</div>
				<div className='flex flex-col justify-center gap-1'>
					<label className='text-xl'>Streszczenie</label>
					<textarea
						defaultValue='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores esse ut fuga dolorum eveniet explicabo placeat atque deserunt saepe laborum perspiciatis, itaque unde culpa quam, quisquam blanditiis laboriosam earum delectus illum perferendis possimus tempore fugit et! Earum deleniti ullam animi culpa sed consectetur perferendis, nisi ab soluta obcaecati ipsum dolor?'
						{...register('summary', {
							maxLength: 500,
							required: 'Streszczenie jest wymagane',
						})}
						maxLength={500}
						className='min-h-36 rounded-md border-2 text-xl p-1  resize-none'
					/>
					<ErrorMessage>{errors?.summary?.message}</ErrorMessage>
				</div>
			</div>
			<div className='flex flex-col  gap-1 w-1/3'>
				<label className='text-xl'>Zdjęcie</label>
				{/* <input
					type='file'
					className='flex-1 rounded-md border-2 text-xl p-1'
					{...register('image', { required: 'Obraz jest wymagany' })}
				/> */}
				<FileUploader
					register={register}
					types={['JPG', 'PNG', 'GIF', 'JPEG']}
				/>
				<ErrorMessage>{errors?.image?.message}</ErrorMessage>
			</div>
		</div>
	);
}

function ErrorMessage({ children }: { children: string }) {
	return <span className='text-red-500'>{children}</span>;
}
