import { redirect, useNavigate } from "react-router-dom";
import { IErrorResponse } from "../../types/api";
import { Authkey, IRegisterFormValue, IRegisterResponse } from "../../types/authentication";
import { setLocalStorageItem } from "../../utils/storage";
import RegisterForm from "./component/RegisterForm";
import useRegister from "./hooks/useRegister";
import classes from "./Register.module.scss";
import { useState,useEffect } from "react";
import useSession from "../../hooks/useSession/useSession";

function RegisterPage() {
  const { onRegister, isLoading } = useRegister();
  const {user,setUser} = useSession();
  const navigate = useNavigate();
  const [regisErrorMessage, setRegisErrorMessage] = useState<string | null>(null);
  const onFormSubmit = async (value: IRegisterFormValue) => {
    console.log(value, ": value");
    const result = await onRegister(value);
    if (!result?.success) {
      setRegisErrorMessage((result as IErrorResponse).message);
    }
    else{
        setRegisErrorMessage(null)
        setLocalStorageItem(Authkey.authToken,(result as IRegisterResponse).token,true)
    }
    navigate('/')
  }
  return (
    <div className={classes.bg}>
      <div className={`container p-t-30 p-b-30 ${classes.formSize}`}>
        <h1 className="m-b-20">Register</h1>
        <RegisterForm
          isLoading={isLoading}
          errorMessage={regisErrorMessage}
          onSubmit={onFormSubmit}
        />
      </div>
    </div>
  );
}
export default RegisterPage;
