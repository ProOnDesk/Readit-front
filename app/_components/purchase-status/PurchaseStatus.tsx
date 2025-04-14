'use client';

import { useGetTransactionStatusQuery } from '@/app/_redux/features/transactionsApiSlice';
import Link from 'next/link';
import { CiCircleCheck, CiCircleRemove } from 'react-icons/ci';
import Spinner from '../ui/Spinner';
import { ImSpinner2 } from 'react-icons/im';
import { translateTransactionStatus } from '@/utils/translateTransactionStatus';

export default function PurchaseStatus({
	transactionId,
}: {
	transactionId: string;
}) {
	const { data: transaction } = useGetTransactionStatusQuery(
		{
			transaction_id: transactionId,
		},
		{ pollingInterval: 1000 }
	);
	const successStatuses = ['COMPLETED'];
	const pendingStatuses = [
		'PENDING',
		'WAITING_FOR_CONFIRMATION',
		'WAITING_FOR_PAYMENT',
	];
	const status = transaction?.status;

	return (
		<div className='flex flex-col items-center justify-center w-full md:min-h-[calc(100vh-80px)] min-h-[calc(100vh-64px)] py-10'>
			<div className='flex gap-5 flex-col items-center '>
				<h2 className='text-3xl font-semibold text-center '>
					Status transakcji
				</h2>
				<p className='text-xl pb-10'> {transactionId}</p>
				{status && successStatuses.includes(status) ? (
					<span className='text-5xl text-green-500'>
						<CiCircleCheck />
					</span>
				) : status && pendingStatuses.includes(status) ? (
					<span className='animate-spin text-5xl text-mainGreen'>
						<ImSpinner2 />
					</span>
				) : (
					<span className='text-5xl text-red-500'>
						<CiCircleRemove />
					</span>
				)}

				<p className='text-xl'>
					{translateTransactionStatus(status || 'Nieznany status')}
				</p>
			</div>
			<div className='mx-auto w-fit grid grid-cols-2 pt-20'>
				<Link
					href='/app/purchase-history'
					className='group  text-center px-6 py-2'
				>
					<span className='relative font-medium before:absolute before:w-full before:bottom-0 before:left-0 before:h-[1px] before:bg-black before:scale-x-0 group-hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300'>
						Transakcje
					</span>
				</Link>
				<Link
					href='/app/lib'
					className='text-center rounded-full bg-mainGreen text-white font-medium hover:bg-mainGreenSecond transition-colors duration-300 px-6 py-2'
				>
					Biblioteka
				</Link>
			</div>
		</div>
	);
}
