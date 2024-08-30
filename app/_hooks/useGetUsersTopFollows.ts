import { useGetUsersTopFollowsMutation } from "../_redux/features/creatorsApiSlice";

export function useGetUsersTopFollows() {
  const [getUsersTopFollows, { isLoading, data }] =
    useGetUsersTopFollowsMutation();

  function getUsersTopFollowsHookFn(page: number) {
    return getUsersTopFollows({ page });
  }

  return {
    getUsersTopFollows: getUsersTopFollowsHookFn,
    users: data,
    isLoading,
  };
}
