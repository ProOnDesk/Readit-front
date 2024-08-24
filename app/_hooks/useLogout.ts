import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
    useLogoutMutation
} from "../_redux/features/authApiSlice";
import { logout } from "../_redux/features/authSlice";
import { useAppDispatch } from "../_redux/hooks";

export function useLogout() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [logoutMutation] = useLogoutMutation();

  function logoutHookFn() {
    logoutMutation(undefined)
      .unwrap()
      .then(() => {
        dispatch(logout());
        router.push("/");
        toast.success("Wylogowano");
      });
  }
  return { logoutHookFn };
}
