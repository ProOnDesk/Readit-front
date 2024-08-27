import toast from "react-hot-toast";
import {
    useRetrieveUserQuery,
    useUpdateUserBgImageMutation
} from "../_redux/features/authApiSlice";

interface UpdateUserHookArgs {
  img: File;
}

export function useUpdateUserBgImage() {
  const [updateUserBgImage, { isLoading }] = useUpdateUserBgImageMutation();
  const { refetch } = useRetrieveUserQuery();

  function updateUserBgImageHookFn(data: UpdateUserHookArgs) {
    updateUserBgImage(data)
      .unwrap()
      .then(() => {
        toast.success("Zdjęcie w tle zostało zaktualizowane");
        refetch();
      })
      .catch((error) => {
        console.log(error);
        if (error?.data?.detail) {
          toast.error(error.data.detail);
        } else {
          toast.error("Wystąpił problem podczas aktualizacji zdjęcia w tle");
        }
      });
  }

  return { updateUserBgImageHookFn, isLoading };
}
