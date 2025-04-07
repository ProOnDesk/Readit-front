import PurchaseElement from './PurchaseElement';

export default function PurchaseList() {
	return (
		<div className='w-full mx-auto flex flex-col gap-5 px-4 sm500:px-8 sm:px-12 lg:px-16 pb-20'>
			<div className='hidden lg:grid grid-cols-[auto_150px_auto_100px] gap-3 mx-5 font-semibold'>
				<p>Number transakcji</p>
				<p>Data</p>
				<p>Status</p>
				<p>Wartość</p>
			</div>
			<div className='flex flex-col gap-3'>
				<PurchaseElement />
				<PurchaseElement />
				<PurchaseElement />
				<PurchaseElement />
				<PurchaseElement />
			</div>
		</div>
	);
}
