import { createContext, useContext, useEffect, useState } from "react";

 const authcontest = createContext();

function auth ({children}){
 
    useEffect((user)=>{
        const userdata = localStorage.getItem("user");

        if(userdata){
            setUser(JSON.parse(userdata));
        }
    },[])
    

    const [user, setUser] = useState(null);
 

    const login = (userdata)=>{
            localStorage.setItem("user", JSON.stringify(userdata));
            setUser(userdata);

    }

    const logout = () =>{
        localStorage.removeItem("user");
        setUser(null)
    };
    return (
        <authcontest.Provider value={{user,login,logout}}>
            {auth}
        </authcontest.Provider>
    )
}

export default useauth =()=> useContext(authcontest);
