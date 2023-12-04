import {useState} from 'react'
import classes from './Login.module.scss'
import LoginForm from './components/LoginForm'
import { ILoginFormValue } from '../../types/authentication'

export default function Login () {
    const onSubmit = (value:ILoginFormValue) => {
        console.log(value)
    }
    return(<>
       <div className={classes.bg}>
            <div className={`container ${classes.formSize}`}>
                <h1 className="m-b-20">Login</h1>
                <LoginForm onSubmit={onSubmit}/>
            </div>
       </div>
    </>)
}