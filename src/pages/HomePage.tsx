import {Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useAuth} from "../hooks/useUser.ts";
import {removeUser} from "../store/registrationSlice.ts";
import {useAppDispatch} from "../hooks/redux-hook.ts";

const HomePage = () => {
  const user = useAuth()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (!user.isAuth) {
      navigate('singup')
    }
  }, [navigate, user.isAuth])
  return (
    <div className="flex flex-col gap-20 items-center">
      <Typography variant="h1">HOME</Typography>
      <Typography variant="h4">Hello {user.email}</Typography>
      <Button onClick={() => dispatch(removeUser())} variant="outlined">Sing Out</Button>
    </div>
  );
};

export default HomePage;
