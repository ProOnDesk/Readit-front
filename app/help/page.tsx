import { Metadata } from 'next';
import MakeIssueForm from '../_components/help/MakeIssueForm';

export const metadata: Metadata = {
	title: 'Zgłoś problem | ReadIt',
};

export default function page() {
	return (
		<div className='w-full md:h-[calc(100vh-80px)] h-[calc(100vh-64px)] bg-blackSecond/10 flex justify-center items-center'>
			<div className='mx-auto px-10 py-5 bg-white rounded-md max-w-2xl shadow-md'>
				<div className='flex flex-col items-center text-center'>
					<p className='mb-4 aspect-square border rounded-full p-4 border-black'>
						<i className='bi bi-envelope-arrow-up  text-3xl'></i>
					</p>
					<p className='text-2xl font-medium uppercase pb-4'>
						Formularz zgłoszeniowy
					</p>
					<p className='text-base max-w-full pb-8'>
						Dziękujemy za zgłoszenie! Opisz dokładnie problem, a my postaramy
						się jak najszybciej go rozwiązać. Twoja opinia pomaga nam ulepszać
						naszą platformę.
					</p>
				</div>
				<MakeIssueForm />
			</div>
		</div>
	);
}
