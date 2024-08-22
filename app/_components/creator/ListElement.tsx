import { FaArrowDown, FaArrowUp, FaMinus } from 'react-icons/fa';

interface ListElementProps {
	leftIcon?: React.ReactNode;
	text: string;
	isChoosen?: boolean;
	index?: number;
	onUp?: () => void;
	onDown?: () => void;
	onDelete?: () => void;
}

export default function ListElement({
	leftIcon,
	text,
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
				<span>{leftIcon}</span>
				<span>{text}</span>
			</span>
			<span className='flex flex-row gap-3  group-[.list-element]:group-hover:opacity-100 opacity-0 transition-all duration-300'>
				<button className='group-last:hidden' onClick={onDown}>
					<FaArrowDown />
				</button>
				<button className='group-first:hidden' onClick={onUp}>
					<FaArrowUp />
				</button>
				<button onClick={onDelete}>
					<FaMinus />
				</button>
			</span>
		</div>
	);
}
