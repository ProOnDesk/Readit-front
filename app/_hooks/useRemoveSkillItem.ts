import toast from "react-hot-toast";
import {
    useRemoveSkillItemMutation,
    useRetrieveUserQuery
} from "../_redux/features/authApiSlice";

interface RemoveSkillItemHookArgs {
  id: string;
}

export function useRemoveSkillItem() {
  const { refetch } = useRetrieveUserQuery();
  const [removeSkillItem, { isLoading }] = useRemoveSkillItemMutation();

  function removeSkillItemHookFn({ id }: RemoveSkillItemHookArgs) {
    removeSkillItem({ skill_id: id })
      .unwrap()
      .then(() => {
        refetch();
      })
      .catch((error) => {
        console.log(error);
        if (error?.data?.detail) {
          toast.error(error.data.detail);
        } else {
          toast.error("Wystąpił błąd podczas usuwania.");
        }
      });
  }

  return { removeSkillItemHookFn, isLoading };
}
