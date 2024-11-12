import { useLogout } from "@/app/_hooks/useLogout";
import { useRouter } from "next/navigation";

interface LogoutBtnProps {
  closeNav?: () => void;
}

function LogoutBtn({ closeNav }: LogoutBtnProps) {
  const { logoutHookFn } = useLogout();
  const router = useRouter();

  return (
    <button
      className="block w-full group focus:outline-none py-4 font-medium text-red-500 text-left"
      onClick={() => {
        logoutHookFn();
        closeNav?.();
        router.replace("/");
      }}
    >
      <span className="relative before:absolute before:w-full before:bottom-0 before:left-0 before:h-[1px] before:bg-red-500 before:scale-x-0 group-hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300">
        Wyloguj
      </span>
    </button>
  );
}

export default LogoutBtn;
