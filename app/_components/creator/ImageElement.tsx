import ImageUploader from './ImageUploader';

interface ImageElementProps {
	element: { content_type: string; content: string };
	articleList?: { content_type: string; content: string }[];
	setArticleList?: React.Dispatch<
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
		if (!articleList) return;
		if (!setArticleList) return;
		const newArticleList = [...articleList];
		newArticleList[index] = {
			content_type: 'image',
			content: URL.createObjectURL(file),
		};
		setArticleList(newArticleList);
	};

	if (!articleList && !setArticleList && !articleList)
		return (
			<img
				src={
					element?.content === '' ? '/placeholder-image.jpg' : element?.content
				}
				alt='Your image'
				className={`pointer-events-none max-h-[800px] mx-auto`}
			/>
		);

	return (
		<ImageUploader
			types={['JPG', 'PNG', 'GIF', 'JPEG']}
			fileLink={element?.content}
			handleChange={handleChangeImage}
		/>
	);
}
