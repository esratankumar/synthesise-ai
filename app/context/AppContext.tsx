"use client";

import {

createContext,

useContext,

useState,

ReactNode,

} from "react";

interface AppState {

theme: string;

setTheme: (value: string) => void;

search: string;

setSearch: (value: string) => void;

}

const AppContext = createContext<AppState | null>(null);

export function AppProvider({

children,

}:{

children: ReactNode;

}){

const [theme,setTheme]=useState("dark");

const [search,setSearch]=useState("");

return(

<AppContext.Provider

value={

{

theme,

setTheme,

search,

setSearch,

}

}

>

{children}

</AppContext.Provider>

);

}

export function useApp(){

const ctx=useContext(AppContext);

if(!ctx){

throw new Error("AppProvider missing");

}

return ctx;

}
