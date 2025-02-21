import React from "react";
import '../../styles/index.css';

const Semaforo = ({ activeLight, onLightClick }) => {
    return (
      <div className="traffic-light-container">
        <div
          className={`light red ${activeLight === "red" ? "active flashing" : ""}`}
          onClick={() => onLightClick("red")}
        ></div>
        <div
          className={`light orange ${activeLight === "orange" ? "active flashing" : ""}`}
          onClick={() => onLightClick("orange")}
        ></div>
        <div
          className={`light green ${activeLight === "green" ? "active flashing" : ""}`}
          onClick={() => onLightClick("green")}
        ></div>
      </div>
    );
};

export default Semaforo;
