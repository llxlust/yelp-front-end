import { Navigate, Outlet, useNavigate, } from "react-router-dom";
import NavigationBar from "../components/Nav/NavigationBar";
import useSession from "../hooks/useSession/useSession";
import {useEffect,useState} from 'react'

export default function PrivateLayout() {
    const {user,loginByToken,isLoggedIn} = useSession()
    // const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false)

    const onLogin = async () =>{
        try{
            await loginByToken();
        }finally{
            // setIsLoggedIn(true)
        }
    }

    useEffect(()=>{
        onLogin()
    },[])
    if(!isLoggedIn){
        return <h1>Loading</h1>
    }
    if(!user && isLoggedIn) {
        return <Navigate to="/"/>
    }
    return(
        <div>
            <NavigationBar/>
            <Outlet/>
        </div>
    )

}