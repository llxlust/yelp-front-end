import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../../components/forms/Input/Input";
import Button from "../../../components/forms/Button/Button";
import { IUser } from "../../../types/authentication";
import { useEffect } from "react";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { IUserDetailsFormInput } from "../../../types/user.type";


interface IUserDetailsFormProps {
    user: IUser | null;
    onFormSubmit: (value : IUserDetailsFormInput) => void
}
const userDetailsFormSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().required().email()
})

export default function UserDetailsForm({ user,onFormSubmit }: IUserDetailsFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IUserDetailsFormInput>({
    defaultValues: {
      name: "",
      email: "",
    },
    mode: 'all',
    resolver: yupResolver(userDetailsFormSchema)
  });
  const onSubmit: SubmitHandler<IUserDetailsFormInput> = (data) => {
    console.log(data, ":data");
    onFormSubmit(data)
  };
  useEffect(() => {
    if (user) {
      setValue("name", user.name);
      setValue("email", user.email);
    }
  }, [user]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Name"
        isValid={!errors.name}
        isValidMessage={errors.name ? "Name is require" : ""}
        id="user-name-input"
        {...register("name")}
      />
      <Input
        type="email"
        label="Email"
        isValid={!errors.email}
        isValidMessage={errors.name ? "Email is invalid" : ""}
        id="user-name-input"
        {...register("email")}
      />
      <Button type="submit" text="submit" varient="primary" />
    </form>
  );
}
