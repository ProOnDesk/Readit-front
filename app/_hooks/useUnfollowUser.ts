import toast from "react-hot-toast";
import {
  useCheckIfFollowQuery,
  useRetrieveUserQuery,
  useUnfollowUserMutation,
} from "../_redux/features/authApiSlice";

interface unfollowUserProps {
  userId: string;
}

export function useUnfollowUSer({ userId }: unfollowUserProps) {
  const { refetch } = useRetrieveUserQuery();
  const { refetch: refetchIsFollowing } = useCheckIfFollowQuery({ userId });
  const [unfollowUser, { isSuccess, isLoading }] = useUnfollowUserMutation();

  function unfollowUserHookFn() {
    unfollowUser({ userId })
      .unwrap()
      .then(() => {
        toast.success("Zrezygnowano z obserwacji");
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

  return { unfollowUserHookFn, isSuccess, isLoading };
}
