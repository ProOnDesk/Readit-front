import PurchaseList from '@/app/_components/purchase-history/PurchaseList';

export default function page() {
	return (
		<div className='max-w-[1800px] mx-auto'>
			<div className='py-12 md:py-16 px-4 sm500:px-8 sm:px-12 lg:px-16 lg:py-20'>
				<h3 className='font-semibold text-2xl sm500:text-3xl sm:text-4xl text-left'>
					Moje transakcje
				</h3>
			</div>

			<PurchaseList />
		</div>
	);
}
