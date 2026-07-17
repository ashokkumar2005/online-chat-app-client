import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login.jsx";
import Sign from "./pages/sign.jsx";
import Chat from "./pages/chat.jsx";
import { AuthProvider } from "./componets/authen.jsx";
import { useEffect } from "react";
import { socket } from "./socket.js";

function App() {

  useEffect(()=>{
    socket.on("Connect" , ()=>{
      console.log("Connected");

      console.log(socket.id);
    });

    socket.on( "Welcome" , (msg) =>{
      console.log(msg);
    });

    socket.emit("Hello" , "Hello Server");

    return()=>{
      socket.off("connect");
      socket.off("welcome");
    }
},[]);
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Sign />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App
