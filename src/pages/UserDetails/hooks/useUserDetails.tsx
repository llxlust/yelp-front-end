import { useState } from "react";
import useSession from "../../../hooks/useSession/useSession";
import axios from "axios";
import { ISingleResponse } from "../../../types/api";
import { Authkey, IUser } from "../../../types/authentication";
import { variable } from "../../../utils/variable";
import { IUserDetailsFormInput } from "../../../types/user.type";
import { getAuthRequestHeader } from "../../../utils/api";
import { getLocalStorageItem } from "../../../utils/storage";
export default function UseUserDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useSession();
  const onUpdateUser = async (value: IUserDetailsFormInput) => {
    const payload = {
      name: value.name,
      email: value.email,
    };
    try {
      setIsLoading(true);
      const res = await axios.patch<ISingleResponse<IUser>>(
        `${variable.apiUrl}/v1/auth/update-details`,
        payload,
        getAuthRequestHeader(
        getLocalStorageItem(Authkey.authToken, false) || ""
        )
      );

      alert("Succes update user");

      console.log(res.data.data, ":res.data.data");
      setUser(res.data.data);
      return {
        ...res.data.data,
      };
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    onUpdateUser,
  };
}
