import { Children, createContext, useContext, useState } from "react";

const ContextApi=createContext();
export const ContextProvider =({children})=>{
    const getToken=localStorage.getItem("JWT_TOKEN")
        ?localStorage.getItem("JWT_TOKEN"):null;

        const [token,setToken]=useState(getToken);
        const sendData={
            token,setToken,
        };
        return <ContextApi.Provider value={sendData}>{children}</ContextApi.Provider>
}
export const useStoreContext =()=>{
    const context=useContext(ContextApi);
    return context;
}