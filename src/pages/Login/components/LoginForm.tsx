import { useState,FormEvent ,useMemo} from "react";
import Input from "../../../components/forms/Input/Input";
import Button from "../../../components/forms/Button/Button";
import { ILoginFormValue } from "../../../types/authentication";
interface ILoginFromProp{
    onSubmit: (value:ILoginFormValue)=>void
}
export default function LoginForm({onSubmit}:ILoginFromProp) {
  const [nameValue, setNameValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [isNameDirty, setNameDirty] = useState<boolean>(false);
  const [isPasswordDirty, setPasswordDirty] = useState<boolean>(false);

  const onSubmitForm = (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    if(!isFormValid){
        return
    }
    onSubmit({
        username: nameValue,
        password: passwordValue
    })
  }
  const isNameValid = useMemo(()=>{
    return !!nameValue
  },[nameValue])
  const isPasswordValid = useMemo(()=>{
    return passwordValue.length >= 6
  },[passwordValue])
  const isFormValid = useMemo(()=>{
    return isNameValid && isPasswordValid
  },[isNameValid,isPasswordValid])
  return (
    <>
      <form onSubmit={onSubmitForm}>
        <Input
          id="name-input"
          value={nameValue}
          isValid={isNameDirty ? isNameValid : true}
          isValidMessage="Please input your username"
          label="Username"
          placeHolder="Please input your username"
          describedby="Username input"
          onChange={(e) => {
            setNameValue(e.target.value);
            setNameDirty(true);
          }}
        />
         <Input
          id="password-input"
          type="password"
          value={passwordValue}
          isValid={isPasswordDirty ? isPasswordValid : true}
          isValidMessage="Please input at least 6 digit"
          label="Password"
          describedby="Password input"
          onChange={(e) => {
            setPasswordValue(e.target.value);
            setPasswordDirty(true);
          }}
        />
        <Button type="submit" text="Submit" varient="success" />
      </form>
    </>
  );
}
