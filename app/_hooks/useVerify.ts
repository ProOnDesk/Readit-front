import { useEffect } from "react";
import { useVerifyTokenMutation } from "../_redux/features/authApiSlice";
import { useAppDispatch } from "../_redux/hooks";
import { finishInitialLoad, setAuth } from "../_redux/features/authSlice";

export default function useVerify() {
  const [verifyToken] = useVerifyTokenMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    verifyToken(undefined)
      .unwrap()
      .then(() => {
        dispatch(setAuth());
      })
      .finally(() => {
        dispatch(finishInitialLoad());
      });
  }, [dispatch, verifyToken]);
}
