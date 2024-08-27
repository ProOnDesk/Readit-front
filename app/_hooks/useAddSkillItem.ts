import toast from "react-hot-toast";
import {
  useAddSkillToUserMutation,
  useRetrieveUserQuery,
} from "../_redux/features/authApiSlice";

interface AddSkillItemHookArgs {
  skill_name: string;
}

export function useAddSkillItem() {
  const { refetch } = useRetrieveUserQuery();
  const [addSkillToUser, { isLoading }] = useAddSkillToUserMutation();

  function addSkillItemHookFn({ skill_name }: AddSkillItemHookArgs) {
    addSkillToUser({ skill_name })
      .unwrap()
      .then(() => {
        refetch();
      })
      .catch((error) => {
        console.log(error);
        if (error?.data?.detail) {
          toast.error(error.data.detail);
        } else {
          toast.error("Wystąpił błąd podczas dodawania.");
        }
      });
  }

  return { addSkillItemHookFn, isLoading };
}
