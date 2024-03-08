import Form from "../components/Form.tsx";
import {Typography} from "@mui/material";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {setUser} from "../store/registrationSlice.ts";
import {useAppDispatch} from "../hooks/redux-hook.ts";
import {Link, useNavigate} from "react-router-dom";

const LogInPage = () => {
  const navigate = useNavigate()
  const auth = getAuth();
  const dispatch = useAppDispatch()
  const logIn = (email: string, pass: string) => {
    signInWithEmailAndPassword(auth, email, pass)
      .then(({user}) => {
        dispatch(setUser({
          email: user.email,
          token: user.refreshToken,
          id: user.uid,
        }))
        navigate('/')
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          alert("Недействительные учетные данные");
        }
      });
  };
  return (
    <div className="flex flex-col items-center gap-8">
      <Typography variant="h3">Войти</Typography>
      <Form log={true} submitF={logIn}/>
      <Link to='../singup'>Регистрация</Link>
    </div>
  );
};

export default LogInPage;
