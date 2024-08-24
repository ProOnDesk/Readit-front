import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
    useLoginMutation
} from "../_redux/features/authApiSlice";

interface LoginHookArgs {
  email: string;
  password: string;
}

export function useLogin() {
  const [login, { isLoading }] = useLoginMutation();
  const router = useRouter();

  function loginHookFn(data: LoginHookArgs) {
    login(data)
      .then(() => {
        toast.success("Zalogowano pomyślnie");
        router.push("/browse");
      })
      .catch((error) => {
        if (
          error &&
          typeof error.data === "object" &&
          !Array.isArray(error.data)
        ) {
          const values = Object.values(error.data);
          if (values.length > 0 && Array.isArray(values[0])) {
            const firstErrorMessage = values[0][0];
            toast.error(firstErrorMessage);
          }
        } else {
          toast.error("Wystąpił błąd podczas logowania.");
        }
      });
  }

  return { loginHookFn, isLoading };
}
