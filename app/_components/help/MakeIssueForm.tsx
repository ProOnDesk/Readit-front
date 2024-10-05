'use client';

import { useCreateNewIssueMutation } from '@/app/_redux/features/supportSlice';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Spinner from '../ui/Spinner';

export default function MakeIssueForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const [createNewIssue, { isLoading: isIssueCreating }] =
		useCreateNewIssueMutation();

	const onSubmit = (data: any) => {
		createNewIssue({
			category: data.category,
			title: data.title,
			description: data.description,
		})
			.unwrap()
			.then(() => {
				toast.success('Zgłoszenie zostało wysłane pomyślnie');
				reset();
			})
			.catch((err) => {
				toast.error(err.data.detail);
			});
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col gap-6 w-full sm:w-4/5 mx-auto'
		>
			<div className='relative flex flex-col gap-1'>
				<label className='text-lg'>Kategoria</label>
				<select
					{...register('category')}
					required
					name='category'
					className={`rounded-t-md text-xl p-1 px-2 min-h-[52px] focus:outline-none peer bg-blackSecond/5`}
				>
					<option value='Naruszenie regulaminu' className='rounded-none'>
						Naruszenie regulaminu
					</option>
					<option value='Problem techniczny'>Problem techniczny</option>
					<option value='Prośba o pomoc'>Prośba o pomoc</option>
				</select>
				<InputAccent />
			</div>
			<div className='relative flex flex-col gap-1'>
				<label className='text-lg'>Temat</label>
				<input
					placeholder='Wpisz temat...'
					{...register('title', { required: 'Tytuł jest wymagany' })}
					type='text'
					className='rounded-t-md text-xl p-1 px-2 min-h-[52px] focus:outline-none peer bg-blackSecond/5'
				/>
				<InputAccent />
				<ErrorMessage>{errors?.title?.message?.toString()}</ErrorMessage>
			</div>
			<div className='relative flex flex-1 flex-col justify-center gap-1'>
				<label className='text-lg'>Opis</label>
				<textarea
					placeholder='Opisz swój problem...'
					{...register('description', {
						maxLength: 500,
						required: 'Opis jest wymagany',
					})}
					maxLength={500}
					className='flex-1 min-h-36 rounded-t-md text-xl p-1 resize-none peer px-2 focus:outline-none bg-blackSecond/5'
				/>
				<ErrorMessage>{errors?.description?.message?.toString()}</ErrorMessage>
				<InputAccent />
			</div>

			<button
				type={'submit'}
				disabled={isIssueCreating}
				className='bg-mainGreen text-white font-semibold w-fit mx-auto px-14 py-2 rounded-full text-xl my-4 hover:bg-mainGreenSecond duration-300 transition-colors shadow-sm'
			>
				{isIssueCreating ? <Spinner color='white' size='small' /> : 'Wyślij'}
			</button>
		</form>
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
