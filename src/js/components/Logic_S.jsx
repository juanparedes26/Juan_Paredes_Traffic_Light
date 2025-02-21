import React,{useState}from "react";
import Semaforo from "./Semaforo";

const Logic_S = () => {
    const [activeLight, setActiveLight] = useState("");
  
    const handleLightClick = (color) => {
      setActiveLight(color);
    };
  
    return (
      <Semaforo activeLight={activeLight} onLightClick={handleLightClick} />
    );
  };
  
  export default Logic_S;
  