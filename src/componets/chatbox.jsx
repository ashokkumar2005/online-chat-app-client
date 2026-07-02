import axios from "axios";
import { useEffect, useState } from "react";
import Side from "./side.jsx";


const ChatBox = ({selecteduser})=>{

    const [ messages , setMessages] = useState([]);
    const [text,setText] = useState("");

    useEffect(()=>{
        
            const getmessage = async()=>{

                try{
                    const res = await axios.get(`/api/messages/${selecteduser._id}`);

                    setMessages(res.data);
                }catch(err){
                    console.log(err)
                }
             }
            if(selecteduser){
                getmessage();
            }
    },[selecteduser])

    const Sendmessage = async()=>{
        if( !text.trim()) return;
        try{
            const res = axios.post( `/api/message/${selecteduser._id}` , {text})
            setMessages((prev)=>[...prev, res.data])

            setMessages("")
        }catch(err){
            console.log(err)

        }
        if(!selecteduser){
            return(
                <h2>Select a User to Start The Chat </h2>
            )
        }
    }

    return(
        <>
        <div>
            <Side selectuser={selecteduser} />
        </div>

        <div>
            <input type="message" value={text} placeholder="Type A Message..." onChange={(e)=> setText( e.target.value)}/ >
            
         </div>
         <div>
            { messages.length>0 ?(messages.map((msg)=>{
               <div key={msg._id} className="message">{msg.text}</div>
                 })) : ( <p> No Message Yet </p>)}
         </div>

         <button onClick={Sendmessage}> Send </button>
        </>
    )

}

export default ChatBox;