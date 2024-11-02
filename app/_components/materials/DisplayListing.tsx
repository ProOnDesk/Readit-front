import { useState } from 'react';
import { GoCheck, GoCopy } from 'react-icons/go';
import HighlightedListing from '../creator/HighlightedListing';

interface ArticleElement {
	content_type: string;
	content: string;
}

export default function DisplayListing({
	element,
}: {
	element: ArticleElement;
}) {
	const [isCopied, setIsCopied] = useState(false);
	async function setClipboard(text: string) {
		const type = 'text/plain';
		const blob = new Blob([text], { type });
		const data = [new ClipboardItem({ [type]: blob })];
		await navigator.clipboard.write(data);
		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, 2000);
	}

	return (
		<div className='border-2 border-blackSecond/10 rounded-md relative'>
			{isCopied && (
				<span className='absolute right-0 top-0 text-base m-1 flex flex-row items-center text-mainGreen'>
					<GoCheck className='text-xl' />
					skopiowano
				</span>
			)}
			{!isCopied && (
				<button
					onClick={setClipboard.bind(null, element.content)}
					className='absolute right-0 top-0 p-1  rounded-sm text-2xl hover:text-mainGreen transition-colors duration-300 hover:cursor-pointer flex items-center justify-center'
				>
					<GoCopy />
				</button>
			)}
			<HighlightedListing codeString={element.content} />
		</div>
	);
}
