import axios,{AxiosError} from "axios";
import { IRegisterFormValue, IRegisterResponse, IUser } from "../../../types/authentication";
import { IErrorResponse, ISingleResponse } from "../../../types/api";
import { variable } from "../../../utils/variable";
import {useState} from 'react'
import useSession from "../../../hooks/useSession/useSession";

const useRegister = () => {
  const [isLoading,setIsloading] = useState<boolean>(false)
  const {setUser} = useSession()

  const onRegister = async (value: IRegisterFormValue) => {
    const payload = {
      name: value.username,
      email: value.email,
      password: value.password,
      role:"user"
    };
    try {
      setIsloading(true)
      const res = await axios.post<ISingleResponse<IRegisterResponse>>(
        `${variable.apiUrl}/v1/auth/register`,payload
      );
      setUser(res.data?.data.user)
      console.log(res.data.data)
      return{
        ...res.data.data,
        success:true
      }
    } catch (error) {
        const err = error as AxiosError<IErrorResponse>
        //console.log(err.response?.data.message,':error');
        return err.response?.data
    }finally{
      setIsloading(false)
    }
  };
  return {
    isLoading,
    onRegister
  };
};

export default useRegister;
