import {BrowserRouter,Routes,Route} from "react-router-dom";

import Login from "./pages/login.jsx";
import Sign from "./pages/sign.jsx";
import Chat from "./pages/chat.jsx";
function App() {
return(
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/register" element ={<Sign/>} />
            <Route path="/chat" element = {<Chat/>} />
        </Routes>
     </BrowserRouter>
);
}

export default App
