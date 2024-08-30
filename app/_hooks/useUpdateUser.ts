import toast from "react-hot-toast";
import {
  useRetrieveUserQuery,
  useUpdateUserMutation,
} from "../_redux/features/authApiSlice";

interface UpdateUserHookArgs {
  fieldToUpdate: string;
  valueToUpdate: string;
}

interface useUpdateUserProps {
  successMsg: string;
  errorMsg: string;
}

export function useUpdateUser({ errorMsg, successMsg }: useUpdateUserProps) {
  const [updateUser, { isLoading, isSuccess }] = useUpdateUserMutation();
  const { refetch } = useRetrieveUserQuery();

  function updateUserHookFn(data: UpdateUserHookArgs) {
    updateUser(data)
      .unwrap()
      .then(() => {
        toast.success(successMsg);
        refetch();
      })
      .catch((error) => {
        console.log(error);
        if (error?.data?.detail) {
          toast.error(error.data.detail);
        } else {
          toast.error(errorMsg);
        }
      });
  }

  return { updateUserHookFn, isLoading, isSuccess };
}
