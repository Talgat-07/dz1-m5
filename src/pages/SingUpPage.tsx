import Form from "../components/Form.tsx";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {Typography} from "@mui/material";
import {useAppDispatch} from "../hooks/redux-hook.ts";
import {setUser} from "../store/registrationSlice.ts";
import {Link, useNavigate} from "react-router-dom";

const SingUpPage = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const auth = getAuth();
  const SingUp = (email: string, pass: string) => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then(({user}) => {
        dispatch(setUser({
          email: user.email,
          token: user.refreshToken,
          id: user.uid,
        }))
        navigate('/')
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          alert("Электронная почта уже используется");
        }
      });
  };
  return (
    <div className="flex flex-col items-center gap-8">
      <Typography variant="h3">Регистрация</Typography>
      <Form log={false} submitF={SingUp}/>
      <Link to='../login'>Войти</Link>
    </div>
  );
};

export default SingUpPage;
