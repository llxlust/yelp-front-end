import { Outlet } from "react-router-dom";
import NavigationBar from "../components/Nav/NavigationBar";
import useSession from "../hooks/useSession/useSession";
import {useEffect} from 'react'

export default function PublicLayout(){
    const {user,loginByToken} = useSession()
    useEffect(()=>{
        if(!user){
            loginByToken()
        }
    },[])
    return<>
    <NavigationBar/>
    <Outlet/>
    </>
}