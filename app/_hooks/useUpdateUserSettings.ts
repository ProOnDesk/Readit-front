import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import {
	useRetrieveUserQuery,
	useUpdatePasswordMutation,
	useUpdateUserMutation,
} from '../_redux/features/authApiSlice';
import toast from 'react-hot-toast';

export function useUpdateUserSettings(
	contentTitle: string | undefined,
	onCloseModal: () => void
) {
	const [updateUser, { isLoading: isUserUpdating }] = useUpdateUserMutation();
	const [updatePassword, { isLoading: isPasswordUpdating }] =
		useUpdatePasswordMutation();
	const { data: user, refetch: refetchUserData } = useRetrieveUserQuery();

	const {
		register,
		handleSubmit,
		getValues,
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
		if (contentTitle === 'password') {
			updatePassword({
				old_password: data.old_password,
				new_password: data.repeat_password,
			})
				.unwrap()
				.then(() => {
					toast.success('Hasło zostało zmienione');
					onCloseModal();
				})
				.catch((err) => {
					toast.error(err?.data?.detail ?? 'Nie udało się zmienić hasła');
				});
		}
	};
	return {
		onSubmit,
		isUserUpdating,
		isPasswordUpdating,
		register,
		errors,
		handleSubmit,
		getValues,
		contentTitleDisplay,
		user,
	};
}
