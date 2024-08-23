import { FaArrowDown, FaArrowUp, FaMinus } from 'react-icons/fa';
import { LuText } from 'react-icons/lu';
import { CiImageOn, CiText } from 'react-icons/ci';

interface ListElementProps {
	type: string;
	isChoosen?: boolean;
	index?: number;
	onUp?: () => void;
	onDown?: () => void;
	onDelete?: () => void;
}

export default function ListElement({
	type,
	isChoosen,
	onUp,
	onDown,
	onDelete,
}: ListElementProps) {
	return (
		<div
			className={`flex justify-between items-center p-7 text-lg duration-300 transition-colors w-full hover:bg-whiteSecond ${
				isChoosen && ''
			} list-element group`}
		>
			<span className='flex flex-row items-center gap-4'>
				<span>
					{type === 'title' && <CiText />}
					{type === 'image' && <CiImageOn />}
					{type === 'text' && <LuText />}
				</span>
				<span>
					{type === 'title' && 'Tytuł'}
					{type === 'image' && 'Zdjęcie'}
					{type === 'text' && 'Tekst'}
				</span>
			</span>
			<span className='flex flex-row gap-3  group-[.list-element]:group-hover:opacity-100 opacity-0 transition-all duration-300'>
				<button
					className='group-last:hidden hover:text-mainGreenSecond transition-colors duration-300 p-1'
					onClick={onDown}
				>
					<FaArrowDown />
				</button>
				<button
					className='group-first:hidden hover:text-mainGreenSecond transition-colors duration-300 p-1'
					onClick={onUp}
				>
					<FaArrowUp />
				</button>
				<button
					className='hover:text-mainGreenSecond transition-colors duration-300 p-1'
					onClick={onDelete}
				>
					<FaMinus />
				</button>
			</span>
		</div>
	);
}
