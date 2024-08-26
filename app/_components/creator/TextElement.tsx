import { useEffect, useRef } from 'react';

interface TextElementProps {
	element: { content_type: string; content: string };
	index: number;
	setArticleList: React.Dispatch<
		React.SetStateAction<{ content_type: string; content: string }[]>
	>;
}

export default function TextElement({
	element,
	index,
	setArticleList,
}: TextElementProps) {
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		if (textAreaRef.current) {
			textAreaRef.current.style.height = '0px';
			const scrollHeight = textAreaRef.current.scrollHeight;
			textAreaRef.current.style.height = scrollHeight + 'px';
		}
	}, [textAreaRef, element]);

	return (
		<textarea
			ref={textAreaRef}
			value={element?.content}
			className='text-xl w-full focus:outline-none resize-none'
			onChange={(e) => {
				setArticleList((prev) => {
					const newList = [...prev];
					newList[index] = { ...newList[index], content: e.target.value };
					return newList;
				});
			}}
		/>
	);
}
