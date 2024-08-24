import {
	FieldErrors,
	UseFormClearErrors,
	UseFormRegister,
	UseFormSetValue,
} from 'react-hook-form';
import FileUploader from '../FileUploader';
import { CreatorInputs } from './Creator';

export default function ArticleForm({
	register,
	errors,
	setValue,
	clearErrors,
}: {
	register: UseFormRegister<CreatorInputs>;
	errors: FieldErrors<CreatorInputs>;
	setValue: UseFormSetValue<CreatorInputs>;
	clearErrors: UseFormClearErrors<CreatorInputs>;
}) {
	return (
		<div className='flex flex-row gap-5 w-full py-10 mb-5'>
			<div className='flex flex-col gap-10 w-2/3'>
				<div className='relative flex flex-1 flex-col gap-1'>
					<label className='text-xl'>Tytuł</label>
					<input
						defaultValue='Chwytliwy tytuł, który zszokuje? Śmiało!...'
						{...register('title', { required: 'Tytuł jest wymagany' })}
						type='text'
						className='rounded-t-md text-xl p-1 px-2 focus:outline-none peer bg-blackSecond/5'
					/>
					<InputAccent />
					<ErrorMessage>{errors?.title?.message}</ErrorMessage>
				</div>
				<div className='relative flex flex-col justify-center gap-1'>
					<label className='text-xl'>Streszczenie</label>
					<textarea
						defaultValue='Podsumuj w dwóch zdaniach, zanim skończy się kawa...'
						{...register('summary', {
							maxLength: 500,
							required: 'Streszczenie jest wymagane',
						})}
						maxLength={500}
						className='min-h-36 rounded-t-md text-xl p-1 resize-none peer px-2 focus:outline-none bg-blackSecond/5'
					/>
					<ErrorMessage>{errors?.summary?.message}</ErrorMessage>
					<InputAccent />
				</div>
			</div>
			<div className='flex flex-col  gap-1 w-1/3'>
				<label className='text-xl'>Zdjęcie</label>
				<FileUploader
					setValue={setValue}
					register={register}
					clearErrors={clearErrors}
					types={['JPG', 'PNG', 'GIF', 'JPEG']}
				/>
				<ErrorMessage>{errors?.image?.message}</ErrorMessage>
			</div>
		</div>
	);
}

function ErrorMessage({ children }: { children: string | undefined }) {
	return <span className='text-red-500 absolute -bottom-7'>{children}</span>;
}

function InputAccent() {
	return (
		<div className='w-full h-[2px] bg-blackSecond/10 peer-focus:bg-mainGreen absolute bottom-0 duration-300 transition-colors'></div>
	);
}
