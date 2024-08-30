import toast from "react-hot-toast";
import {
  useCheckIfFollowQuery,
  useFollowUserMutation,
  useRetrieveUserQuery,
} from "../_redux/features/authApiSlice";

interface followUserProps {
  userId: string;
}

export function useFollowUSer({ userId }: followUserProps) {
  const { refetch } = useRetrieveUserQuery();
  const { refetch: refetchIsFollowing } = useCheckIfFollowQuery({ userId });
  const [followUser, { isSuccess, isLoading }] = useFollowUserMutation();

  function followUserHookFn() {
    followUser({ userId })
      .unwrap()
      .then(() => {
        toast.success("Zaobserwowano twórcę");
        refetch();
        refetchIsFollowing();
      })
      .catch((error) => {
        console.log(error);
        if (error?.data?.detail) {
          toast.error(error.data.detail);
        } else {
          toast.error("Wystąpił nieoczekiwany błąd");
        }
      });
  }

  return { followUserHookFn, isSuccess, isLoading };
}
