import useSession from "../../hooks/useSession/useSession";
import { IUserDetailsFormInput } from "../../types/user.type";
import UserDetailsForm from "./components/UserDetailsForm";
import UseUserDetails from "./hooks/useUserDetails";

export default function UserDetailsPage(){
    const {user} = useSession()
    const {onUpdateUser} = UseUserDetails()
    const onSubmit = (data:IUserDetailsFormInput) => {
        onUpdateUser(data)
    }
    return(
        <div className="container">
            <UserDetailsForm onFormSubmit={onSubmit} user={user}/>
        </div>
    )
}