import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
  useCheckIfFollowQuery,
  useFollowUserMutation,
  useRetrieveUserQuery,
} from "../_redux/features/authApiSlice";
import { useAppSelector } from "../_redux/hooks";

interface followUserProps {
  userId: string;
}

export function useFollowUSer({ userId }: followUserProps) {
  const { refetch } = useRetrieveUserQuery();
  const { refetch: refetchIsFollowing } = useCheckIfFollowQuery({ userId });
  const [followUser, { isSuccess, isLoading }] = useFollowUserMutation();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const router = useRouter();

  function followUserHookFn() {
    if (!isAuthenticated) {
      router.push("/login");
      toast.error("Musisz być zalogowany, aby zaobserwować twórcę");
      return;
    }

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
