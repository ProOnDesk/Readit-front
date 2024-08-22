import { useEffect, useRef } from 'react';

interface TitleElementProps {
	element: { type: string; content: string };
	index: number;
	setArticleList: React.Dispatch<
		React.SetStateAction<{ type: string; content: string }[]>
	>;
}

function TitleElement({ element, index, setArticleList }: TitleElementProps) {
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
			className='w-full min-h-7 h-fit text-2xl focus:outline-none resize-none'
			maxLength={100}
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

export default TitleElement;
