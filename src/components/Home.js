import React from "react";
import "../styles/Home.css";
import { useLanguage } from "./language.js"; // Importa el contexto de lenguaje

const textos = {
  es: {
    saludo: "Hola, soy Irina Dominguez!",
    subtitulo: "Desarrolladora Full Stack",
  },
  en: {
    saludo: "Hi, I'm Irina Dominguez!",
    subtitulo: "Full Stack Developer",
  },
};

function Home() {
  const { language } = useLanguage(); // Obtén el idioma actual

  return (
    <div className="background" id="Home">
      <div className="container-home">
        <h1 translate="no" className="titulo">{textos[language].saludo}</h1>
        <h2 translate="no" className="subtitulo">{textos[language].subtitulo}</h2>
        <div className="social_links">
          <a href="https://github.com/irina771" target="_blank" rel="noopener noreferrer">
            <div className="img-github"></div>
          </a>
          <a href="https://www.linkedin.com/in/irina-dominguez-5b63a5250/" target="_blank" rel="noopener noreferrer">
            <div className="img-linkedin"></div>
          </a>
          <a href="https://drive.google.com/file/d/1l-PGJ6ELvmo4KyCxerx4nAS9CFzTncN7/view?usp=sharing" target="_blank" rel="noopener noreferrer" download="Tu_CV.pdf">
            <div className="img-cv"></div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
