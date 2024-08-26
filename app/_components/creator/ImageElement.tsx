import ImageUploader from './ImageUploader';

interface ImageElementProps {
	element: { content_type: string; content: string };
	articleList: { content_type: string; content: string }[];
	setArticleList: React.Dispatch<
		React.SetStateAction<{ content_type: string; content: string }[]>
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
			content_type: 'image',
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
