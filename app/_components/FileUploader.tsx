import { useState, DragEvent, ChangeEvent, useRef } from 'react';
import {
	UseFormClearErrors,
	UseFormRegister,
	UseFormSetValue,
} from 'react-hook-form';
import toast from 'react-hot-toast';
import { IoImagesOutline } from 'react-icons/io5';
import { CreatorInputs } from './creator/Creator';

interface FileUploaderProps {
	types: string[];
	register: UseFormRegister<CreatorInputs>;
	setValue: UseFormSetValue<CreatorInputs>;
	clearErrors: UseFormClearErrors<CreatorInputs>;
}

function FileUploader({
	types,
	register,
	setValue,
	clearErrors,
}: FileUploaderProps) {
	const [isDragOver, setIsDragOver] = useState(false);
	const [imageSrc, setImageSrc] = useState('');
	const [file, setFIle] = useState<File | null>(null);
	const { ref, onChange, ...rest } = register('image');
	const inputRef = useRef<HTMLInputElement | null>(null);

	function handleFile(fileObj: File) {
		const fileExtension = fileObj.type.split('/')[1].toUpperCase();
		if (types.includes(fileExtension)) {
			setFIle(fileObj);
			const reader = new FileReader();
			reader.onload = () => {
				const result = reader.result as string;
				setImageSrc(result);
			};
			reader.readAsDataURL(fileObj);
			clearErrors('image');

			if (inputRef.current) {
				const dataTransfer = new DataTransfer();
				dataTransfer.items.add(fileObj);
				setValue('image', dataTransfer.files);
			}
		} else {
			toast.error('Zły typ pliku.');
		}
	}

	function handleDrop(e: DragEvent<HTMLDivElement>) {
		e.preventDefault();
		const fileObj = e.dataTransfer?.files[0];
		if (fileObj) {
			handleFile(fileObj);
			setIsDragOver(false);
		}
	}

	function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
		const fileObj = e.target.files && e.target.files[0];
		if (fileObj) {
			handleFile(fileObj);
		}
	}

	return (
		<div
			className='border-2 rounded-md flex items-center overflow-hidden justify-center w-full h-full mx-auto'
			onDragOver={(e) => {
				e.preventDefault();
				setIsDragOver(true);
			}}
			onDrop={handleDrop}
			onDragLeave={() => {
				!file && setIsDragOver(false);
			}}
			onMouseEnter={() => setIsDragOver(true)}
			onMouseLeave={() => setIsDragOver(false)}
		>
			<label
				className={`relative overflow-hidden flex flex-col items-center justify-center w-full h-full cursor-pointer text-center duration-300 transition-colors ${
					isDragOver ? 'bg-blackSecond/5' : 'bg-white'
				}`}
			>
				{!file && (
					<div className='pointer-events-none flex flex-col items-center justify-center pt-5 pb-6'>
						<svg
							className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 20 16'
						>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
							/>
						</svg>
						<p className='mb-2 text-sm'>
							<span className='font-semibold'>Click to upload</span> or drag and
							drop
						</p>
						<p className='text-xs'>SVG, PNG, JPG or GIF</p>
					</div>
				)}
				<input
					{...register('image', {
						onChange: handleInputChange,
					})}
					ref={(e) => {
						ref(e);
						inputRef.current = e;
					}}
					{...rest}
					type='file'
					id='image'
					name='image'
					className='hidden'
				/>
				{file && (
					<img
						src={imageSrc}
						alt='Your image'
						className={`absolute w-full h-full object-cover object-center`}
					/>
				)}
				<div
					className={`pointer-events-none absolute h-full w-full z-30 flex justify-center items-center transition-all duration-300 ${
						isDragOver && file
							? 'opacity-100 bg-blackSecond/50'
							: 'opacity-0 bg-transparent'
					}`}
					onDragEnter={() => {
						setIsDragOver(true);
					}}
					onDragLeave={() => {
						setIsDragOver(false);
					}}
				>
					<span className={`text-mainGreenSecond h-2/3 w-full max-h-16`}>
						<IoImagesOutline className='w-full h-full' />
					</span>
				</div>
			</label>
		</div>
	);
}

export default FileUploader;
