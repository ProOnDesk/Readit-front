import { translateTransactionStatus } from '@/utils/translateTransactionStatus';

interface PurchaseElementProps {
	transactionNumber: string;
	date: string;
	status: string;
	value: string;
}

export default function PurchaseElement({
	transactionNumber,
	date,
	status,
	value,
}: PurchaseElementProps) {
	const formattedDate = new Date(date).toLocaleString('pl-PL', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
	});
	return (
		<>
			<div className='hidden lg:grid grid-cols-[350px_200px_auto_100px] gap-3 p-5 border-2 text-base border-blackSecond/10 rounded-xl  '>
				<p>{transactionNumber}</p>
				<p>{formattedDate}</p>
				<p>{translateTransactionStatus(status)}</p>
				<p>{Number(value).toFixed(2)} PLN</p>
			</div>
			<div className='lg:hidden flex flex-col sm500:flex-row w-fit mx-auto sm:px-10 gap-5 sm:gap-10 p-5 border-2 text-xs sm400:text-sm border-blackSecond/10 rounded-xl  '>
				<div className='flex flex-col gap-2'>
					<p className='font-semibold'>Numer</p>
					<p>{transactionNumber}</p>

					<p className='font-semibold'>Data</p>
					<p>{formattedDate}</p>
				</div>
				<div className='flex flex-col gap-2'>
					<p className='font-semibold'>Status</p>
					<p>{status}</p>

					<p className='font-semibold'>Wartość</p>
					<p>{value} PLN</p>
				</div>
			</div>
		</>
	);
}
