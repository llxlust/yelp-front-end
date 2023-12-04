import {
  createContext,
  SetStateAction,
  Dispatch,
  useState,
  ReactNode,
  useMemo,
} from "react";
import { IUser } from "../types/authentication";

export interface ISessionProps {
  user: IUser | null;
  isLoggedIn: boolean;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}
export const SessionContext = createContext<ISessionProps>({
  user: null,
  isLoggedIn: false,
  setUser: () => undefined,
  setIsLoggedIn: () => undefined,
});

function SessionProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const state: ISessionProps = {
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
  };
  return (
    <SessionContext.Provider value={useMemo(() => state, [state])}>
      {children}
    </SessionContext.Provider>
  );
}

export default SessionProvider;
