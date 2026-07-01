import Chat from "../componets/chatbox.jsx";
import Nav from "../componets/navbar.jsx";
import Sidebar from "../componets/side.jsx";
import Onlineuser from "../componets/onlineuser.jsx";

function chat(){
    return(
        <>
        <div>
            <Chat/>
        </div>
        <div>
            <Nav/>
        </div>
        <div>
            <Sidebar/>
        </div>
        <div>
            <Onlineuser/>
        </div>
        </>
    )
}

export default chat;