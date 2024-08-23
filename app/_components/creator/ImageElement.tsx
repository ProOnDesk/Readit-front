import ImageUploader from './ImageUploader';

interface ImageElementProps {
	element: { type: string; content: string };
	articleList: { type: string; content: string }[];
	setArticleList: React.Dispatch<
		React.SetStateAction<{ type: string; content: string }[]>
	>;
	index: any;
}

export default function ImageElement({
	element,
	articleList,
	setArticleList,
	index,
}: ImageElementProps) {
	const handleChangeImage = (file: File) => {
		const newArticleList = [...articleList];
		newArticleList[index] = {
			type: 'image',
			content: URL.createObjectURL(file),
		};
		setArticleList(newArticleList);
	};

	return (
		<ImageUploader
			types={['JPG', 'PNG', 'GIF', 'JPEG']}
			fileLink={element?.content}
			handleChange={handleChangeImage}
		/>
	);
}
