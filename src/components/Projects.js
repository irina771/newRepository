import React, { useState } from "react";
import Modal from "./modal.js";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/Projects.css";
import DeployIcon from "../assets/icons/Arrow.svg";
import Github3 from "../assets/icons/github.svg";
import { useLanguage } from "./language.js"; // Asegúrate de importar el contexto

const textos = {
  es: {
    titulo: "Proyectos",
    fecha: "Realizado desde:",
    codigo: "Código",
    descripcion1:
      "Este proyecto lo hice de manera grupal durante una pasantía, donde trabaje como full stack durante un mes, desarrollando una página de viajes. Las tecnologías que implementamos fueron Typescript, React, Subabase, node, entre otras.",
    descripcion2:
      "Esta SPA del clima busca el pronóstico actual para cualquier ciudad que busque al instante, cambiando la interfaz según la temperatura de esta. Esta página utiliza las tecnologías Javascript, React, Css y Tailwind css.",
    descripcion3:
      "En este proyecto con mi grupo hicimos la entrega final para Soy Henry. Nuestro proyecto se centró en crear una página que ayude a un refugio de perritos aceptando donaciones, creando un carrito de compras para ayudar al refugio y adoptar perritos o ser su casa transitoria.",
    descripcion4:
      "En esta página hice mi primer proyecto de forma individual como estudiante en Soy Henry donde muestra información detallada sobre cada perro incluyendo una sección en la que los usuarios puedan crear y agregar perros a la página.",
    descripcion5:
      "Este proyecto se realizó para un portafolio de ilustraciones con la temática 'galería de arte'. Lo realicé con React, Javascript y Css."
  },
  en: {
    titulo: "Projects",
    fecha: "Made since:",
    codigo: "Code",
    descripcion1:
      "I did this project as a group during an internship, where I worked as a full stack for a month, developing a travel page. The technologies we implemented were Typescript, React, Subabase, node, among others.",
    descripcion2:
      "This weather SPA searches for the current forecast for any city you search for instantly, changing the interface depending on its temperature. This page uses Javascript, React, CSS and Tailwind CSS technologies.",
    descripcion3:
      "In this project with my group we made the final delivery for Soy Henry. Our project focused on creating a page that helps a dog shelter by accepting donations, creating a shopping cart to help the shelter and adopt dogs or be their transitional home .",
    descripcion4:
      "On this page I did my first project individually as a student on Soy Henry where it shows detailed information about each dog including a section where users can create and add dogs to the page.",
    descripcion5:
      "This project was created for an illustration portfolio with an 'art gallery' theme. I built it using React, JavaScript, and CSS."
    },
};

const projectsData = [
  {
    title: { es: "Hit the road jack", en: "Hit the road jack" },
    image: require("../assets/pasantía.png"),
    deployLink: "https://www.hittheroadjack.co",
    description: { es: textos.es.descripcion1, en: textos.en.descripcion1 },
    gallery: [require("../assets/pasantía2.png"),],
  },
  {
    title: { es: "Proyecto Clima", en: "Weather Project" },
    image: require("../assets/app-clima-3.png"),
    githubLink: "https://github.com/irina771/app-clima",
    deployLink: "https://app-climaaa-4oksiddbp-irina771.vercel.app",
    description: { es: textos.es.descripcion2, en: textos.en.descripcion2 },
    gallery: [require("../assets/app-clima-1.png"),],
  },
  {
    title: { es: "Salvando huellas", en: "Saving footprints" },
    image: require("../assets/pf2.png"),
    githubLink: "https://github.com/Mattger10/FRONT-PF_salvando_huellas-main",
    deployLink: "https://front-pf-salvando-huellas-main.vercel.app",
    description: { es: textos.es.descripcion3, en: textos.en.descripcion3 },
    gallery: [require("../assets/pf1.png"),],
  },
  {
    title: { es: "Proyecto individual de perritos", en: "Individual dog project" },
    image: require("../assets/pi2.png"),
    githubLink: "https://github.com/irina771/PI-Dogs-main",
    deployLink: "https://dog-client.vercel.app",
    description: { es: textos.es.descripcion4, en: textos.en.descripcion4 },
    gallery: [require("../assets/pi3.png"),],
  },
  {
    title: { es: "Portafolio de arte", en: "Art Portfolio" },
    image: require("../assets/portfolio_art.png"),
    deployLink: "https://portafolio-arte-nine.vercel.app",
    description: { es: textos.es.descripcion5, en: textos.en.descripcion5 },
    gallery: [require("../assets/portfolio_art2.png"),],
  },
];

function Projects() {
  const { language } = useLanguage();
  const [estado1, setEstado1] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleModalToggle = (index) => {
    setSelectedProject(index);
    setEstado1(true);
  };

  return (
    <section className='sectionContainer' id="Projects">
      <div className='infoProject'>
        <h1 className='tituloSection'>{textos[language].titulo}</h1>
      </div>

      <div className='contenedores'>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay={true}
          autoPlaySpeed={6000}
          infinite={true}
          swipeable
          slidesToSlide={1}
          responsive={{
            desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
            tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
            mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
          }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className='card'>
              <h2>{project.title[language]}</h2>
              <img
                src={project.image}
                alt={`imagen de ${project.title[language]}`}
                className='cardImg'
                onClick={() => handleModalToggle(index)}
              />
              <div className='linksContainer'>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='links'
                >

                  <img src={Github3} alt="github icon" className="github" />

                  {textos[language].codigo}
                </a>
                <a
                  href={project.deployLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='links'
                >
                  <img src={DeployIcon} alt="Deploy icon" className="deploy" />
                  Deploy
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {selectedProject !== null && (
        <Modal
          estado={estado1}
          cambiarEstado={setEstado1}
          titulo={projectsData[selectedProject].title[language]}
        >
          <div className='modalContent'>
            <h1>{projectsData[selectedProject].title[language]}</h1>

            <div className="gallery">
              {projectsData[selectedProject].gallery.map((imgSrc, idx) => (
               <div key={idx} className="galleryItem">
               <img src={imgSrc} alt={`Imagen del proyecto ${idx + 1}`} className="modalImage" />
             </div>
              ))}
            </div>

            <p>{projectsData[selectedProject].description[language]}</p>
            <h3>{textos[language].fecha} Jun.2023</h3>
          </div>
        </Modal>
      )}
    </section>
  );
}

export default Projects;
