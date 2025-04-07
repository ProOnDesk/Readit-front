'use client';

import { useGetUserTransactionsQuery } from '@/app/_redux/features/transactionsApiSlice';
import PurchaseElement from './PurchaseElement';

export default function PurchaseList() {
	const { data: transactions } = useGetUserTransactionsQuery({
		page: 1,
		page_size: 20,
	});
	console.log(transactions);
	return (
		<div className='w-full mx-auto flex flex-col gap-5 px-4 sm500:px-8 sm:px-12 lg:px-16 pb-20'>
			<div className='hidden lg:grid grid-cols-[350px_200px_auto_100px] gap-3 mx-5 font-semibold'>
				<p>Number transakcji</p>
				<p>Data</p>
				<p>Status</p>
				<p>Wartość</p>
			</div>
			<div className='flex flex-col gap-3'>
				{transactions?.items.map((transaction) => (
					<PurchaseElement
						key={transaction.id}
						transactionNumber={transaction.id}
						date={transaction.created_at}
						status={transaction.status}
						value={transaction.total_price}
					/>
				))}
			</div>
		</div>
	);
}
