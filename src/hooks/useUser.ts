import {useAppSelector} from "./redux-hook.ts";

export const useAuth = () => {
  const {id, token, email} = useAppSelector(state => state.registration)
  return {
    isAuth: !!email,
    email,
    token,
    id,
  }
}