import { createContext } from "react";
import { State } from "./App";
import { ReducerAction } from "./App";

export type ContextProps = {
    state: State,
    dispatch: React.Dispatch<ReducerAction>
}

export const UserContext = createContext<ContextProps>({} as ContextProps)