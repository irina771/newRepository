import React from "react";
import { useLanguage } from '../components/language'; // Asegúrate de la ruta correcta
import '../styles/About.css';

const textos = {
  es: {
    titulo: "Sobre mí",
    descripcion:
      "Soy una apasionada desarrolladora web y móvil con experiencia en crear aplicaciones dinámicas y responsivas. Me encanta transformar ideas en productos digitales funcionales y atractivos. Además de mis conocimientos técnicos, también tengo habilidades en:",
    habilidades: [
      "Gestión de proyectos",
      "Trabajo en equipo",
      "Resolución de problemas",
    ],
  },
  en: {
    titulo: "About Me",
    descripcion:
      "I am a passionate web and mobile developer with experience in creating dynamic and responsive applications. I love transforming ideas into functional and appealing digital products. In addition to my technical knowledge, I also have skills in:",
    habilidades: [
      "Project management",
      "Teamwork",
      "Problem-solving",
    ],
  },
};

function About() {
  const { language } = useLanguage(); // Desestructurar el idioma

  return (
    <>
      <h1 className="tituloSection" id="About">
        {textos[language].titulo}
      </h1>
      <div className="about-container">
        <div className="img-yo"></div>
        <div className="text-container">
          <div>
            <p>{textos[language].descripcion}</p>
            <ul>
              {textos[language].habilidades.map((habilidad, index) => (
                <p key={index}>{habilidad}</p>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
