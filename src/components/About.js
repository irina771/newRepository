import React from "react";
import { useLanguage } from '../components/language'; // Asegúrate de la ruta correcta
import '../styles/About.css';

const textos = {
  es: {
    titulo: "Sobre mí",
    descripcion:
      "Soy desarrolladora de software con experiencia en tecnologías web modernas y un fuerte interés por el desarrollo de soluciones escalables y centradas en el usuario. Disfruto colaborar en equipos multidisciplinarios, enfrentar desafíos técnicos y convertir ideas en productos digitales de impacto. Mis fortalezas incluyen la comunicación efectiva, la gestión de proyectos y la resolución de problemas.",
  },
  en: {
    titulo: "About Me",
    descripcion:
      "I am a software developer with experience in modern web technologies and a strong interest in developing scalable, user-centered solutions. I enjoy collaborating in multidisciplinary teams, tackling technical challenges, and turning ideas into impactful digital products. My strengths include effective communication, project management, and problem-solving.",
  },
};

function About() {
  const { language } = useLanguage();

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
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
