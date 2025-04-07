export default function PurchaseElement() {
	return (
		<>
			<div className='hidden lg:grid grid-cols-[auto_150px_auto_100px] gap-3 p-5 border-2 text-base border-blackSecond/10 rounded-xl  '>
				<p>5be80ea3-9b1f-4d56-a615-88285985209c</p>
				<p>24.05.2025</p>
				<p>Oczekiwanie na potwierdzenie</p>
				<p>350.20 PLN</p>
			</div>
			<div className='lg:hidden flex flex-col gap-3 p-5 border-2 text-xs sm400:text-sm border-blackSecond/10 rounded-xl  '>
				<p className='font-semibold'>Numer</p>
				<p>5be80ea3-9b1f-4d56-a615-88285985209c</p>
				<p className='font-semibold'>Data</p>
				<p>24.05.2025</p>
				<p className='font-semibold'>Status</p>
				<p>Oczekiwanie na potwierdzenie</p>
				<p className='font-semibold'>Wartość</p>
				<p>350.20 PLN</p>
			</div>
		</>
	);
}
