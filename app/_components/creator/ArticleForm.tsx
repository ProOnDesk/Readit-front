import {
	FieldErrors,
	UseFormClearErrors,
	UseFormRegister,
	UseFormSetValue,
} from 'react-hook-form';
import FileUploader from '../FileUploader';
import { CreatorInputs } from './Creator';
import { IoIosClose } from 'react-icons/io';

interface ArticleFormProps {
	register: UseFormRegister<CreatorInputs>;
	errors: FieldErrors<CreatorInputs>;
	setValue: UseFormSetValue<CreatorInputs>;
	clearErrors: UseFormClearErrors<CreatorInputs>;
	tags: string[];
	setTags: React.Dispatch<React.SetStateAction<string[]>>;
	actualImage?: string;
}

export default function ArticleForm({
	register,
	errors,
	setValue,
	clearErrors,
	tags,
	setTags,
	actualImage,
}: ArticleFormProps) {
	const addTag = (e: any) => {
		e.preventDefault();
		if (tags.includes(e.currentTarget.value)) {
			e.currentTarget.value = '';
			return null;
		}
		setTags([...tags, e.currentTarget.value]);
		e.currentTarget.value = '';
	};
	const deleteTag = (tag: string) => {
		setTags(tags.filter((t) => t !== tag));
	};

	return (
		<div className='flex md:flex-row flex-col gap-5 w-full py-10 md:mb-5'>
			<div className='flex flex-col gap-8 md:w-2/3 w-full '>
				<div className='relative flex flex-col gap-1'>
					<label className='text-xl'>Tytuł</label>
					<input
						defaultValue='Chwytliwy tytuł, który zszokuje? Śmiało!...'
						{...register('title', { required: 'Tytuł jest wymagany' })}
						type='text'
						className='rounded-t-md text-xl p-1 px-2 min-h-[52px] focus:outline-none peer bg-blackSecond/5'
					/>
					<InputAccent />
					<ErrorMessage>{errors?.title?.message}</ErrorMessage>
				</div>
				<div className='relative flex flex-col gap-1'>
					<label className='text-xl'>Tagi</label>
					<div className='flex flex-wrap rounded-t-md gap-1 text-xl p-1 px-2 min-h-[52px] focus:outline-none peer bg-blackSecond/5'>
						{tags?.map((tag, index) => (
							<button
								onClick={() => {
									deleteTag(tag);
								}}
								key={index}
								className=' flex items-center gap-2 p-1 px-2 bg-white hover:bg-blackSecond/5 rounded-md mx-1 my-1 group tag-element transition-colors duration-300'
							>
								{tag}
								<IoIosClose className='group-[.tag-element]:group-hover:text-red-500 text-2xl' />
							</button>
						))}
						{tags?.length < 3 && (
							<input
								// {...register('title', { required: 'Tytuł jest wymagany' })}
								onKeyDown={(e) => {
									if (e.key === 'Enter') {
										addTag(e);
									}
								}}
								type='text'
								placeholder='Nowy tag...'
								maxLength={25}
								className='rounded-md text-xl bg-transparent flex-1 focus:outline-none'
							/>
						)}
					</div>
					<InputAccent />
				</div>
				<div className='relative flex flex-1 flex-col justify-center gap-1'>
					<label className='text-xl'>Streszczenie</label>
					<textarea
						defaultValue='Podsumuj w dwóch zdaniach, zanim skończy się kawa...'
						{...register('summary', {
							maxLength: 500,
							required: 'Streszczenie jest wymagane',
						})}
						maxLength={500}
						className='flex-1 min-h-36 rounded-t-md text-xl p-1 resize-none peer px-2 focus:outline-none bg-blackSecond/5'
					/>
					<ErrorMessage>{errors?.summary?.message}</ErrorMessage>
					<InputAccent />
				</div>
			</div>
			<div className='relative flex flex-col h-auto gap-1 md:w-1/3 max-h-[500px]'>
				<label className='text-xl'>Zdjęcie</label>
				<FileUploader
					setValue={setValue}
					register={register}
					clearErrors={clearErrors}
					types={['JPG', 'PNG', 'GIF', 'JPEG']}
					placeholderImage={actualImage}
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
