import { FC, ReactNode } from "react";
import SessionProvider from "./session.context";
const providers: ReadonlyArray<FC<{ children: ReactNode }>> = [SessionProvider];
function Provider({ children }: { children: ReactNode }) {
  return providers.reduceRight(
    (acc, ChildProvider) => <ChildProvider>{acc}</ChildProvider>,
    children
  );
}

export default Provider;
