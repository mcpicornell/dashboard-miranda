import { createContext } from "react";
import { State } from "./App";
import { Action } from "./App";

export type ContextProps = {
    state: State,
    dispatch: React.Dispatch<Action>
}

export const UserContext = createContext<ContextProps>({} as ContextProps)