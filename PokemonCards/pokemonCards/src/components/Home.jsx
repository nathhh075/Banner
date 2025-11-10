import { Link } from "react-router-dom";
import "./css/main.css";

export default function Home() {
  return (
    <section className="home-container">
      {/* Encabezado flotante */}
      <header className="header">
        <h1>Pokémon 3D</h1>
      </header>

      {/* Modelo 3D en pantalla completa */}
      <model-viewer
        auto-rotate
        ar
        alt="pokedex"
       src="../src/models/pokedex1.glb"
        environment-image="./src/environments/mundo1.hdr"
        skybox-image="./src/environments/mundo1.hdr"
        shadow-intensity="1"
        camera-controls
        touch-action="pan-y"
        max-camera-orbit="auto 100deg auto"
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          background: "black",
        }}
      ></model-viewer>

        <div>
      <div className="info">
        <h2>¿Listo para la aventura?</h2>
        <p>
          Explora tus cartas Pokémon favoritas en una experiencia 3D interactiva
          con <b></b>. Sumérgete en el mundo Pokémon con efectos de luz,
          rotación y realismo en tiempo real.
        </p>



       <div className="btn-container">
        <Link to="/cartas" className="btn-jugar">
          <span>Ver Mis Cartas</span>
        </Link>
      </div>

      </div>
      </div>
       

    </section>
    
  );
}
