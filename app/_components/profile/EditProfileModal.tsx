import { RxCross1 } from 'react-icons/rx';
import Spinner from '../ui/Spinner';
import {
	User,
	useUpdateUserMutation,
} from '@/app/_redux/features/authApiSlice';
import { useForm } from 'react-hook-form';
import InputBox from '../ui/InputBox';
import { LuPencilLine } from 'react-icons/lu';

interface EditProfileModalProps {
	onCloseModal: () => void;
	contentTitle: string | undefined;
	user: User | undefined;
}

type FormValues = {
	first_name: string;
	last_name: string;
	sex: string;
	password: string;
	repeat_password: string;
};

export default function EditProfileModal({
	onCloseModal,
	contentTitle,
	user,
}: EditProfileModalProps) {
	const [updateUser, { isLoading: isUserUpdating }] = useUpdateUserMutation();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();

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

	const onSubmit = handleSubmit((data) => {
		console.log(data);
	});
	return (
		<form onSubmit={onSubmit} className='flex flex-col w-full gap-10'>
			<div className='flex w-full justify-between items-center '>
				<p className='font-medium text-2xl'>
					Edytuj {contentTitleDisplay?.toLowerCase()}
				</p>
				<button
					onClick={onCloseModal}
					className='p-1 hover:bg-whiteSecond transition-colors duration-300 rounded-md'
				>
					<RxCross1 size={24} />
				</button>
			</div>
			{contentTitle === 'first_name' && (
				<InputBox
					id='name'
					type='text'
					label='Imię'
					error={errors?.first_name?.message}
					register={register}
					icon={<LuPencilLine size={20} />}
				/>
			)}
			{contentTitle === 'last_name' && (
				<input {...register('last_name')} defaultValue={user?.last_name} />
			)}
			{contentTitle === 'sex' && (
				<input {...register('sex')} defaultValue={user?.sex} />
			)}
			{contentTitle === 'password' && (
				<div>
					<input {...register('password')} />
					<input {...register('repeat_password')} />
				</div>
			)}
			<div className='grid grid-cols-2 gap-5 w-full sm500:w-1/2 mx-auto'>
				<button
					type='button'
					onClick={onCloseModal}
					className='py-2 px-5 hover:bg-whiteSecond transition-colors duration-300 rounded-md'
				>
					Anuluj
				</button>
				<button
					type='submit'
					disabled={isUserUpdating}
					className='py-2 px-5 bg-mainGreen hover:bg-mainGreenSecond font-semibold text-white transition-colors duration-300 rounded-md'
				>
					{isUserUpdating ? <Spinner color='white' size='small' /> : 'Zmień'}
				</button>
			</div>
		</form>
	);
}
