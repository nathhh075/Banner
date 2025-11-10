import React from "react";
import "./css/invocar.css";

const Invocar = ({ modelo, nombre, onClose }) => {
    return (
        <div className="invocar-overlay" onClick={onClose}>
            <div
                className="invocar-content"
                onClick={(e) => e.stopPropagation()} 
            >
                <h2 className="invocar-nombre">{nombre}</h2>
                <model-viewer
                src={modelo}
                alt={nombre}
                auto-rotate
                camera-controls
                ar
                ar-modes="webxr scene-viewer quick-look"
                environment-image="./src/environments/mundo.hdr"
                skybox-image="./src/environments/mundo.hdr"
                shadow-intensity="1"
                touch-action="pan-y"
                max-camera-orbit="auto 100deg auto"
                style={{ width: "100%", height: "100%" }}
                ></model-viewer>
            </div>
        </div>
    );
};

export default Invocar;

