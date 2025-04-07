import PurchaseStatus from '@/app/_components/purchase-status/PurchaseStatus';

export default function page({
	params,
}: {
	params: { transactionId: string };
}) {
	const transactionId = params.transactionId;

	return <PurchaseStatus transactionId={transactionId} />;
}
