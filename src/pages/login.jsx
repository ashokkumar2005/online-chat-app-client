import { useState } from "react"

export default function login(){

    const {email,setEmail} = useState("");
    const {password,setPassword} = useState("");

 const handlesubmit = (e)=>{
    e.preventDefault();
    console.log(email,password);


 }

    return(
        <>
        <form onSubmit={handlesubmit}>
            <input type="email" placeholder="Enter Email" onChange={(e)=> setEmail(e.target.value)}/><br></br>
            <input type="password" placeholder="Enter Password" onChange={(e)=> setPassword(e.target.value)} /><br></br>

            <button> Login </button> 
        </form>
        
        
        </>
    )
}