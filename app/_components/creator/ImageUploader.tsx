import { useState, DragEvent, ChangeEvent } from 'react';
import toast from 'react-hot-toast';
import { IoImagesOutline } from 'react-icons/io5';
import { ImSpinner2 } from 'react-icons/im';

interface ImageUploaderProps {
	handleChange: (file: File) => void;
	fileLink: string;
	types: string[];
}

function ImageUploader({ handleChange, fileLink, types }: ImageUploaderProps) {
	const [isDragOver, setIsDragOver] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	function handleFile(fileObj: File) {
		const fileExtension = fileObj.type.split('/')[1].toUpperCase();

		if (types.includes(fileExtension)) {
			handleChange(fileObj);
			setIsLoading(true);
			const reader = new FileReader();
			reader.onload = () => {
				setIsLoading(false);
			};
			reader.readAsDataURL(fileObj);
		} else {
			toast.error('Zły typ pliku.');
		}
	}

	function handleDrop(e: DragEvent<HTMLLabelElement>) {
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
		<div className='flex justify-center'>
			<label
				className={`relative max-w-full flex items-center justify-center cursor-pointer rounded-md overflow-hidden`}
				onDragOver={(e) => {
					e.preventDefault();
					setIsDragOver(true);
				}}
				onDrop={handleDrop}
				onDragLeave={() => {
					!fileLink && setIsDragOver(false);
				}}
				onMouseEnter={() => setIsDragOver(true)}
				onMouseLeave={() => setIsDragOver(false)}
			>
				<div
					className={`pointer-events-none absolute h-full w-full z-30 flex justify-center items-center transition-all duration-300 ${
						isDragOver && !isLoading
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

				<input
					type='file'
					name='file'
					className='hidden'
					onChange={handleInputChange}
				/>
				{(fileLink || fileLink === '') &&
					(!isLoading ? (
						<img
							src={fileLink === '' ? '/placeholder-image.jpg' : fileLink}
							alt='Your image'
							className={`pointer-events-none max-h-[800px]`}
						/>
					) : (
						<ImSpinner2 className='animate-spin w-10 h-10' />
					))}
			</label>
		</div>
	);
}

export default ImageUploader;
