import { useEffect, useState } from "react";
import axios from "axios";

const side = async({selectuser})=>{

    const [users,setUsers] = useState({});

    useEffect(()=>{
        fetchuser()
    },[])
    const fetchuser = async()=>{
        try{
            axios.get("http://localhost:5000/api/users");
            setUsers(res.data);

        }catch(err){
            console.log(err);
        }
    }

    return(
        <>
        <div>
            <h2>Online Chat</h2>

        </div>
        {users.map((user)=>(
            <div key={user._id}
                 onClick={()=>selectuser()}>
                    <div>
                        <p>{user.email}</p>
                    </div>


            </div>
        ))}
        </>
    )
}

export default side;
