import { BrowserRouter, Routes, Route } from "react-router-dom";
import Heder from "./Heder";
import Login from "./Login";
import Singup from "./Singup";
import Prentpage from "./Prentpage";

function App() {
  return (
    <div className="relative h-screen w-full overflow-hidden text-white">

      {/* 🎬 GLOBAL VIDEO */}
      <video autoPlay loop muted className="absolute w-full h-full object-cover  brightness-150">
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* 🔥 OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 🌐 CONTENT */}
      <div className="relative z-10">
        <BrowserRouter>
          <Heder />

          <Routes>

             <Route path="/" element = {<Prentpage/>}/> 
            <Route path="/Singup" element={<Singup />} />
            <Route path="/Login" element={<Login />} />
            
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;