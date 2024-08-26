interface ListElementProps {
	leftIcon?: React.ReactNode;
	text: string;
	onClick?: () => void;
	rightIcon?: React.ReactNode;
}

export default function AddListElement({
	leftIcon,
	text,
	onClick,
	rightIcon,
}: ListElementProps) {
	return (
		<button
			type='button'
			onClick={onClick}
			className={`flex justify-between items-center p-7 md:text-lg duration-300 transition-colors w-full hover:bg-whiteSecond`}
		>
			<span className='flex flex-row items-center gap-4'>
				<span>{leftIcon}</span>
				<span>{text}</span>
			</span>
			<span>{rightIcon}</span>
		</button>
	);
}
