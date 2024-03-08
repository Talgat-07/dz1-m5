import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React, {FC, useState} from "react";
import {IconCircleCheck, IconEye, IconEyeOff} from "@tabler/icons-react";

type AppProps = {
  submitF: (email: string, pass: string) => void;
  log: boolean
};

type ValueStateType = {
  a: boolean;
  value: string;
};

const Form: FC<AppProps> = ({submitF, log}) => {
  const [value, setValue] = useState<ValueStateType>({
    a: false,
    value: "",
  });
  const [value2, setValue2] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorPass, setErrorPass] = useState<boolean>(false);
  const reg: RegExp = /\w*@\w*\.(\w{2,})/;
  const sub = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!reg.test(value.value)) {
      setValue((el) => ({...el, a: true}));
    }
    if (value2.length <= 5) {
      setErrorPass(true);
    }
    if (reg.test(value.value) && value2.length > 5)
      submitF(value.value, value2);
  };
  return (
    <form className="flex flex-col gap-5 w-64" onSubmit={sub}>
      <FormControl
        {...(value.a ? {error: true} : {})}
        fullWidth
        variant="outlined"
      >
        <InputLabel htmlFor="my-input">Почта</InputLabel>
        <OutlinedInput
          type="email"
          onChange={(e) =>
            setValue((el) => ({...el, a: false, value: e.target.value}))
          }
          value={value.value}
          id="my-input"
          aria-describedby="my-helper-text"
          label="Почта"
        />
        <FormHelperText id="my-helper-text">
          {value.a ? "Введите действительный e-mail адрес" : "Введите ваш e-mail адрес"}
        </FormHelperText>
      </FormControl>
      <FormControl
        {...(value2.length > 5
          ? {error: false}
          : errorPass
            ? {error: true}
            : {})}
        fullWidth
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          onChange={(e) => setValue2(e.target.value)}
          value={value2}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword((e) => !e)}
              >
                {showPassword ? <IconEye/> : <IconEyeOff/>}
              </IconButton>
            </InputAdornment>
          }
          aria-describedby="pass"
          label="Пароль"
        />
        {log ? (
          <FormHelperText>
            Введите ваш пароль
          </FormHelperText>
        ) : (
          <FormHelperText id="pass">
            Ваш пароль должен содержать:{" "}
            <span className="flex items-center">
            Минимум 6 символов
              {value2.length > 5 ? (
                <IconCircleCheck color="blue" size={16}/>
              ) : (
                ""
              )}
          </span>
          </FormHelperText>
        )}
      </FormControl>
      <Button fullWidth variant="outlined" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
