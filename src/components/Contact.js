import React from "react";
import '../styles/Contact.css';
import { useLanguage } from '../components/language.js';

const textos = {
  es: {
    titulo: "Contáctame ahora!",
    email: "📧",
    emailLink: "irinairinadominguez@gmail.com",
    phone: "📱",
    phoneLink: "+5492342445440",
    copy: "Copiar",
  },
  en: {
    titulo: "Contact me now!",
    email: "📧",
    emailLink: "irinairinadominguez@gmail.com",
    phone: "📱",
    phoneLink: "+5492342445440",
    copy: "Copy",
  },
};

const Contact = () => {
  const { language } = useLanguage();

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`${textos[language].copy}: ${text}`);
  };

  return (
    <div class="form-container" id="Contact">
  <div class="form">
      <div className="title-2"><span>{textos[language].titulo}</span></div>
      
      <div className="contact-info">
        <p>
          {textos[language].email} 
          <a href={`mailto:${textos[language].emailLink}`} className="contact-link">
            {textos[language].emailLink}
          </a>
          <button onClick={() => copyToClipboard(textos[language].emailLink)} className="copy-button">
            📋
          </button>
        </p>
        <p>
          {textos[language].phone} 
          <a href={`https://wa.me/${textos[language].phoneLink}`} target="_blank" rel="noopener noreferrer" className="contact-link">
            {textos[language].phoneLink}
          </a>
          <button onClick={() => copyToClipboard(textos[language].phoneLink)} className="copy-button">
            📋
          </button>
        </p>
      </div>
      
      <section className="bg-stars">
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
      </section>
   </div>
    </div>
  );
};

export default Contact;
