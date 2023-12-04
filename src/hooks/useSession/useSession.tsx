import { useContext } from 'react'
import { SessionContext } from '../../stores/session.context'
import axios from 'axios';
import { ISingleResponse } from '../../types/api';
import { Authkey, IRegisterResponse } from '../../types/authentication';
import { variable } from '../../utils/variable';
import { getLocalStorageItem, setLocalStorageItem } from '../../utils/storage';
function useSession() {
    const { user, setUser ,isLoggedIn,setIsLoggedIn} = useContext(SessionContext)

    const loginByToken = async () => {
        const token = getLocalStorageItem(Authkey.authToken)
        if (!token) {
            return
        }
        try {
            const {data: {data}}=await axios.post<ISingleResponse<IRegisterResponse>>(
                `${variable.apiUrl}/v1/auth/login-token`, {},{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }
            );
            setUser(data?.user)
            setLocalStorageItem(Authkey.authToken,data?.token, true)
        } catch (error) {
            console.log(error)
        }finally{
            setIsLoggedIn(true)
        }
    }
    return {
        user,
        isLoggedIn,
        setUser,
        loginByToken
    }
}

export default useSession