import React , {useContext} from "react";
import { AuthProvider } from "./authen.jsx";

const nav = ()=>{

    const {user, logout} = useContext(AuthProvider);

    return(
        <>
        <h2> Online Chat </h2>
        <div>
            <span>
                Welcome ,{user ? name : "guest"}
            </span>
            <button onClick={logout}> Logout </button>
        </div>
        
        </>
    )


}

export default nav;