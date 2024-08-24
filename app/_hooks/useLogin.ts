import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
  useLoginMutation,
  useRetrieveUserQuery,
} from "../_redux/features/authApiSlice";
import { useAppDispatch } from "../_redux/hooks";
import { setAuth } from "../_redux/features/authSlice";

interface LoginHookArgs {
  email: string;
  password: string;
}

export function useLogin() {
  const [login, { isLoading }] = useLoginMutation();
  const { refetch } = useRetrieveUserQuery();
  const dispatch = useAppDispatch();
  const router = useRouter();

  function loginHookFn(data: LoginHookArgs) {
    login(data)
      .unwrap()
      .then(() => {
        toast.success("Zalogowano pomyślnie");
        dispatch(setAuth());
        refetch();
        router.push("/browse");
      })
      .catch((error) => {
        if (error.data.detail) {
          toast.error(error.data.detail);
        } else {
          toast.error("Wystąpił błąd podczas logowania.");
        }
      });
  }

  return { loginHookFn, isLoading };
}
