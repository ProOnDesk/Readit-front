import FileUploader from './FileUploader';

interface ImageElementProps {
	element: { type: string; content: string };
	articleList: { type: string; content: string }[];
	setArticleList: React.Dispatch<
		React.SetStateAction<{ type: string; content: string }[]>
	>;
	index: any;
	imageList: any;
	setImageList: any;
}

export default function ImageElement({
	element,
	articleList,
	setArticleList,
	index,
	imageList,
	setImageList,
}: ImageElementProps) {
	let imageCount = 0;
	for (let i = 0; i < index; i++) {
		if (articleList[i].type === 'image') {
			imageCount++;
		}
	}
	console.log(imageList);
	console.log(imageCount);
	const handleChangeImage = (file: File) => {
		const newArticleList = [...articleList];
		newArticleList[index] = {
			type: 'image',
			content: URL.createObjectURL(file),
		};
		setArticleList(newArticleList);
		const newImageList = [...imageList];
		newImageList[imageCount] = file;
		setImageList(newImageList);
	};

	console.log(imageCount);
	return (
		<FileUploader
			types={['JPG', 'PNG', 'GIF', 'JPEG']}
			file={imageList[imageCount]}
			handleChange={handleChangeImage}
		/>
	);
}
