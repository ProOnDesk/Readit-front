interface ImageElementProps {
	element: { type: string; content: string };
}

export default function ImageElement({ element }: ImageElementProps) {
	return (
		<img
			src={element?.content}
			alt='zdjęcie z artykułu'
			className='w-full rounded-sm'
		/>
	);
}
