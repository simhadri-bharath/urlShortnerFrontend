import { useStoreContext } from "./contextAPi/ContextApi";
import { Navigate } from "react-router-dom";

export default function ({children,publicPage}){
    const {token} =useStoreContext();
    if(publicPage){
        return token?<Navigate to="/dashboard" />:children;
    }
    return !token? <Navigate to="/login" />:children;

}