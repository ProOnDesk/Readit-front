import toast from "react-hot-toast";
import {
    useRetrieveUserQuery,
    useUpdateUserAvatarMutation
} from "../_redux/features/authApiSlice";

interface UpdateUserHookArgs {
  avatar: File;
}

export function useUpdateAvatar() {
  const [updateUserAvatar, { isLoading }] = useUpdateUserAvatarMutation();
  const { refetch } = useRetrieveUserQuery();

  function updateUserHookFn(data: UpdateUserHookArgs) {
    updateUserAvatar(data)
      .unwrap()
      .then(() => {
        toast.success("Avatar został zaktualizowany");
        refetch();
      })
      .catch((error) => {
        console.log(error);
        if (error?.data?.detail) {
          toast.error(error.data.detail);
        } else {
          toast.error("Wystąpił problem podczas aktualizacji avataru");
        }
      });
  }

  return { updateUserHookFn, isLoading };
}
