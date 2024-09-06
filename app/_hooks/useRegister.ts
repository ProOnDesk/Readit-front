import toast from "react-hot-toast";
import { useRegisterMutation } from "../_redux/features/authApiSlice";
import { useRouter } from "next/navigation";

interface RegisterHookArgs {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  sex: string;
}

export function useRegister() {
  const [register, { isLoading }] = useRegisterMutation();
  const router = useRouter();

  function registerHookFn(data: RegisterHookArgs) {
    register(data)
      .unwrap()
      .then(() => {
        toast.success(
          "Konto utworzone. Zaloguj się, aby kontynuować."
        );
        router.push("/login");
      })
      .catch((error) => {
        if (error?.data?.detail) {
          toast.error(error.data.detail);
        } else {
          toast.error("Wystąpił błąd podczas rejestracji.");
        }
      });
  }

  return { registerHookFn, isLoading };
}
