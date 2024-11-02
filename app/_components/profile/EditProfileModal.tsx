import { RxCross1 } from 'react-icons/rx';
import Spinner from '../ui/Spinner';
import {
	User,
	useRetrieveUserQuery,
	useUpdateUserMutation,
} from '@/app/_redux/features/authApiSlice';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import InputBox from '../ui/InputBox';
import { LuPencilLine } from 'react-icons/lu';
import { PiGenderIntersex } from 'react-icons/pi';
import { GoLock } from 'react-icons/go';
import toast from 'react-hot-toast';

interface EditProfileModalProps {
	onCloseModal: () => void;
	contentTitle: string | undefined;
}

export default function EditProfileModal({
	onCloseModal,
	contentTitle,
}: EditProfileModalProps) {
	const [updateUser, { isLoading: isUserUpdating }] = useUpdateUserMutation();
	const { data: user, refetch: refetchUserData } = useRetrieveUserQuery();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>();

	const contentTitleDisplay =
		contentTitle === 'first_name'
			? 'Imię'
			: contentTitle === 'last_name'
			? 'Nazwisko'
			: contentTitle === 'password'
			? 'Hasło'
			: contentTitle === 'sex'
			? 'Płeć'
			: '';

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		if (
			contentTitle === 'first_name' ||
			contentTitle === 'last_name' ||
			contentTitle === 'sex'
		) {
			updateUser({
				fieldToUpdate: contentTitle,
				valueToUpdate: data[contentTitle],
			})
				.unwrap()
				.then(() => {
					toast.success(
						`${contentTitleDisplay} ${
							contentTitle === 'sex' ? 'została zmieniona' : 'zostało zmienione'
						}`
					);
					refetchUserData();
					onCloseModal();
				})
				.catch(() => {
					toast.error('Nie udało się zmienić imienia');
				});
		}
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col w-full gap-10'
		>
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
				<div className='w-full sm500:w-1/2 mx-auto'>
					<InputBox
						id='first_name'
						type='text'
						label={contentTitleDisplay}
						defaultValue={user?.first_name}
						error={errors?.first_name?.message}
						register={register}
						icon={<LuPencilLine size={20} />}
					/>
				</div>
			)}
			{contentTitle === 'last_name' && (
				<div className='w-full sm500:w-1/2 mx-auto'>
					<InputBox
						id='last_name'
						type='text'
						label={contentTitleDisplay}
						defaultValue={user?.last_name}
						error={errors?.last_name?.message}
						register={register}
						icon={<LuPencilLine size={20} />}
					/>
				</div>
			)}
			{contentTitle === 'sex' && (
				<div className='w-full sm500:w-1/2 mx-auto'>
					<InputBox
						id='sex'
						type='text'
						label={contentTitleDisplay}
						defaultValue={user?.sex}
						error={errors?.sex?.message}
						register={register}
						icon={<PiGenderIntersex size={20} />}
					/>
				</div>
			)}
			{contentTitle === 'password' && (
				<div className='w-full sm500:w-1/2 mx-auto flex flex-col gap-3'>
					<InputBox
						id='password'
						type='password'
						label={contentTitleDisplay}
						error={errors?.password?.message}
						register={register}
						icon={<GoLock size={20} />}
					/>
					<InputBox
						id='repeat_password'
						type='password'
						label={'Powtórz hasło'}
						error={errors?.repeat_password?.message}
						register={register}
						icon={<GoLock size={20} />}
					/>
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
