import { useState } from "react";  
import "./App.css";  


export default function App() {

  const [farePozisyonu, setFarePozisyonu] = useState({ x: 0, y: 0 });


  return (
    <div className="App" >
      <h1> FARENİN BULUNDUĞU KONUM : </h1>
      <h2>

        X'İN BULUNDUĞU KONUM = {farePozisyonu.x}

        Y'NİN BULUNDUĞU KONUM = {farePozisyonu.y}


      </h2>

      <div
        style={{ width: "100vw", height: "100vh" }}
        onMouseMove={(e) => {
          setFarePozisyonu({ x: e.clientX, y: e.clientY });

        }}>

      </div>
    </div>
  )
}
