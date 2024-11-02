import { User } from '@/app/_redux/features/authApiSlice';
import Modal from '../ui/Modal';
import EditProfileModal from './EditProfileModal';

export default function EditProfileElement({
	content,
	contentTitle,
	icon,
	user,
}: {
	content?: string | undefined;
	contentTitle: string | undefined;
	icon: React.ReactNode;
	user: User | undefined;
}) {
	const contentTitleDisplay =
		contentTitle === 'first_name'
			? 'Imię'
			: contentTitle === 'last_name'
			? 'Nazwisko'
			: contentTitle === 'password'
			? 'Hasło'
			: contentTitle === 'sex'
			? 'Płeć'
			: undefined;

	return (
		<Modal>
			<Modal.Open opens='editUser'>
				<button className='flex flex-row justify-between items-center p-5 border-2 border-blackSecond/10 rounded-xl group editElement hover:border-mainGreenSecond duration-300 transition-colors'>
					<div className='sm500:grid grid-cols-2 sm500:min-w-[300px]'>
						<h3 className='text-xl text-left font-semibold flex'>
							{contentTitleDisplay}
						</h3>
						{content && <p className='flex items-center text-xl'>{content}</p>}
					</div>

					<span className='row-span-2 col-span-2 text-mainGreenSecond opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
						<span className='text-2xl'>{icon}</span>
					</span>
				</button>
			</Modal.Open>
			<Modal.Window name='editUser'>
				<EditProfileModal
					onCloseModal={undefined as never}
					contentTitle={contentTitle}
					user={user}
				></EditProfileModal>
			</Modal.Window>
		</Modal>
	);
}
