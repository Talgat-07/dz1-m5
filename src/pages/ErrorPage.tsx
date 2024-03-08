import {useAuth} from "../hooks/useUser.ts";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {Typography} from "@mui/material";

const ErrorPage = () => {
  const user = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (!user.isAuth) {
      navigate('singup')
    }
  }, [navigate, user.isAuth])
  return (
    <Typography variant='h1'>
      Error
    </Typography>
  );
};

export default ErrorPage;