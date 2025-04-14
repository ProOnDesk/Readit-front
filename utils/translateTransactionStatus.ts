export function translateTransactionStatus(status: string): string {
	const statusMap: Record<string, string> = {
		PENDING: 'Oczekujące',
		COMPLETED: 'Zakończone',
		CANCELED: 'Anulowane',
		REJECTED: 'Odrzucone',
		FAILED: 'Nieudane',
		WAITING_FOR_CONFIRMATION: 'Oczekuje na potwierdzenie',
		WAITING_FOR_PAYMENT: 'Oczekuje na płatność',
		EXPIRED: 'Wygasło',
	};

	const upperStatus = status.toUpperCase();
	return statusMap[upperStatus] ?? status;
}
