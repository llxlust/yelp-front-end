export enum Role{
    user ='user'
}
export interface IRegisterFormValue {
  username: string;
  email: string;
  password: string;
}
export interface ILoginFormValue {
  username: string;
  password: string;
}
export enum Authkey{
  authToken = "authToken"
}
export interface IUser {
  email: string;
  name: string;
  role: Role.user;
  createAt: string;
  updateAt: string;
  _id: string;
}
export interface IRegisterResponse{
  user:IUser,
  token:string,

}
