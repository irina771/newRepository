import React from "react";
import '../styles/NavBar.css';
import { useLanguage } from '../components/language.js';

const textos = {
  es: {
    home: "Inicio",
    sobreMi: "Sobre mí",
    proyectos: "Proyectos",
    conocimientos: "Conocimientos",
    contacto: "Contacto",
    cambiarIdioma: "Inglés",
  },
  en: {
    home: "Home",
    sobreMi: "About Me",
    proyectos: "Projects",
    conocimientos: "Skills",
    contacto: "Contact",
    cambiarIdioma: "Spanish",
  },
};

function NavBar() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="container-navbar">
      <div translate="no" className="navbar">Irina Dominguez</div>
      <nav className="nav-navbar">
        <ul className="ul-navbar">
          <li className="li-navbar"><a href="#Home" className="a-navbar">{textos[language].home}</a></li>
          <li className="li-navbar"><a href="#About" className="a-navbar">{textos[language].sobreMi}</a></li>
          <li className="li-navbar"><a href="#Projects" className="a-navbar">{textos[language].proyectos}</a></li>
          <li className="li-navbar"><a href="#Skills" className="a-navbar">{textos[language].conocimientos}</a></li>
          <li className="li-navbar"><a href="#Contact" className="a-navbar">{textos[language].contacto}</a></li>
          <li className="li-navbar">
            <button className="botones" onClick={toggleLanguage}>
              {textos[language].cambiarIdioma}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
