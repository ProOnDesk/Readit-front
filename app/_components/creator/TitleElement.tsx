import { useEffect, useRef } from 'react';

interface TitleElementProps {
	element: { content_type: string; content: string };
	index: number;
	setArticleList?: React.Dispatch<
		React.SetStateAction<{ content_type: string; content: string }[]>
	>;
}

export default function TitleElement({
	element,
	index,
	setArticleList,
}: TitleElementProps) {
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
			className='w-full text-3xl font-semibold focus:outline-none resize-none bg-transparent'
			maxLength={100}
			disabled={setArticleList ? false : true}
			onChange={(e) => {
				setArticleList &&
					setArticleList((prev) => {
						const newList = [...prev];
						newList[index] = { ...newList[index], content: e.target.value };
						return newList;
					});
			}}
		/>
	);
}
