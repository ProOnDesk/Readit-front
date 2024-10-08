import { useEffect, useRef, useState } from 'react';
import HighlightedListing from './HighlightedListing';
import { CiEdit } from 'react-icons/ci';

interface ListingElementProps {
	element: { content_type: string; content: string };
	index: number;
	setArticleList?: React.Dispatch<
		React.SetStateAction<{ content_type: string; content: string }[]>
	>;
}

export default function ListingElement({
	element,
	index,
	setArticleList,
}: ListingElementProps) {
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	const [isEditing, setIsEditing] = useState(false);
	const [content, setContent] = useState(element?.content);

	function handleEdit() {
		setIsEditing((isEditing) => !isEditing);
	}

	function handleSave() {
		setArticleList &&
			setArticleList((prev) => {
				const newList = [...prev];
				newList[index] = { ...newList[index], content: content };
				return newList;
			});
		handleEdit();
	}

	useEffect(() => {
		if (textAreaRef.current) {
			textAreaRef.current.style.height = '0px';
			const scrollHeight = textAreaRef.current.scrollHeight;
			textAreaRef.current.style.height = scrollHeight + 'px';
		}
	}, [textAreaRef, content, isEditing]);

	return (
		<div className='flex flex-col w-full h-auto border-blackSecond/10 border-2 p-2 rounded-md'>
			{!isEditing ? (
				<HighlightedListing codeString={element?.content} />
			) : (
				<textarea
					ref={textAreaRef}
					className='focus:outline-none resize-none'
					defaultValue={content}
					onChange={(e) => setContent(e.target.value)}
					spellCheck={false}
				></textarea>
			)}
			<div className='w-full flex justify-end gap-5 pt-2'>
				<button onClick={handleEdit} type='button'>
					{isEditing ? (
						<span className='text-red-400 hover:text-red-300'>Anuluj</span>
					) : (
						<span className='flex items-center gap-2 hover:text-blackSecond/70'>
							<CiEdit className='text-xl' /> Edytuj
						</span>
					)}
				</button>
				{isEditing && (
					<button
						className='text-green-400 hover:text-green-300'
						type='button'
						onClick={handleSave}
					>
						Zapisz
					</button>
				)}
			</div>
		</div>
	);
}
