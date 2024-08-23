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
      .then(() => {
        toast.success(
          "Konto utworzone. Sprawdź swojego maila w celu aktywacji konta."
        );
        router.push("/login");
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
          toast.error("Wystąpił błąd podczas rejestracji.");
        }
      });
  }

  return { registerHookFn, isLoading };
}
