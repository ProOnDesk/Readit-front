interface ListElementProps {
	leftIcon?: React.ReactNode;
	text: string;
	onClick?: () => void;
	isChoosen?: boolean;
	rightIcon?: React.ReactNode;
}

export default function AddListElement({
	leftIcon,
	text,
	onClick,
	isChoosen,
	rightIcon,
}: ListElementProps) {
	return (
		<button
			onClick={onClick}
			className={`flex justify-between items-center p-7 text-lg duration-300 transition-colors w-full hover:bg-whiteSecond ${
				isChoosen && ''
			}`}
		>
			<span className='flex flex-row items-center gap-4'>
				<span>{leftIcon}</span>
				<span>{text}</span>
			</span>
			<span>{rightIcon}</span>
		</button>
	);
}
