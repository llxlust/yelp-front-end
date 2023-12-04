import Button from "../../../components/forms/Button/Button";
import Input from "../../../components/forms/Input/Input";
import { useState, FormEvent, useMemo, useEffect } from "react";
import { validateEmail } from "../../../utils/Validation";
import { IRegisterFormValue } from "../../../types/authentication";
import Alert from "../../../components/alert/Alert";

interface IRegisterFormProps {
  onSubmit: (value: IRegisterFormValue) => void;
  errorMessage: string | null;
  isLoading: boolean
}

function RegisterForm({ onSubmit, errorMessage,isLoading }: IRegisterFormProps) {
  const [nameValue, setNameValue] = useState<string>("");
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [isNameDirty, setNameDirty] = useState<boolean>(false);
  const [isEmailDirty, setEmailDirty] = useState<boolean>(false);
  const [isPasswordDirty, setPasswordDirty] = useState<boolean>(false);
  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) {
      return;
    }
    // const value : IRegisterFormValue= {
    //   name: nameValue,
    //   email: emailValue,
    //   password: passwordValue,
    // };
    //console.log(value, ": form value");
    onSubmit({
      username: nameValue,
      email: emailValue,
      password: passwordValue,
    });
  };
  const isNameValid = useMemo(() => {
    return !!nameValue;
  }, [nameValue]);
  const isEmailValid = useMemo(() => {
    return validateEmail(emailValue);
  }, [emailValue]);
  const isPasswordValid = useMemo(() => {
    return passwordValue.length >= 6;
  }, [passwordValue]);
  const isFormValid = useMemo(() => {
    return isNameValid && isEmailValid && isPasswordValid;
  }, [isNameValid, isEmailValid, isPasswordValid]);
  // useEffect(()=>{
  //     setNameValid(!!nameValue)
  // },[nameValue])
  return (
    <form onSubmit={onSubmitForm}>
      <Input
        value={nameValue}
        id="name-input"
        label="Username"
        isValid={isNameDirty ? isNameValid : true}
        isValidMessage="Please input your username"
        placeHolder="Please input your username"
        describedby="Username input"
        onChange={(e) => {
          setNameDirty(true);
          setNameValue(e.target.value);
        }}
      />
      <Input
        value={emailValue}
        id="email-input"
        label="email"
        isValid={isEmailDirty ? isEmailValid : true}
        isValidMessage="Please input corrct email"
        placeHolder="Please input your email"
        describedby="Email input"
        type="email"
        onChange={(e) => {
          setEmailDirty(true);
          setEmailValue(e.target.value);
        }}
      />
      <Input
        value={passwordValue}
        id="password-input"
        label="Password"
        isValid={isPasswordDirty ? isPasswordValid : true}
        isValidMessage="Please input atleast 6 digit"
        describedby="Password input"
        type="password"
        onChange={(e) => {
          setPasswordDirty(true);
          setPasswordValue(e.target.value);
        }}
      />
      <Button isLoading={isLoading}type="submit" text="Submit" varient="success" />
      {errorMessage && (
        <div className="p-t-10">
          <Alert message={errorMessage} variant="danger" />
        </div>
      )}
    </form>
  );
}
export default RegisterForm;
