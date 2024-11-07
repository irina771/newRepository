import React from "react";
import '../styles/Skills.css';
import { useLanguage } from "./language.js";

const Skills = () => {
    const { language } = useLanguage();
    const textos = {
        es: {
            titulo: "Conocimientos",
        },
        en: {
            titulo: "Skills",
        }
    };

    const skills = [
        { name: "Javascript", icon: require("../assets/iconsSkills/javascript.png") },
        { name: "Typescript", icon: require("../assets/iconsSkills/typescript.png") },
        { name: "NodeJS", icon: require("../assets/iconsSkills/nodejs.png") },
        { name: "CSS", icon: require("../assets/iconsSkills/css.png") },
        { name: "HTML", icon: require("../assets/iconsSkills/html.png") },
        { name: "MySQL", icon: require("../assets/iconsSkills/mysql.png") },
        { name: "PostgreSQL", icon: require("../assets/iconsSkills/postgres.png") },
        { name: "MongoDB", icon: require("../assets/iconsSkills/mongo.png") },
        { name: "Redux", icon: require("../assets/iconsSkills/redux.png") },
        { name: "Express", icon: require("../assets/iconsSkills/express.png") },
        { name: "React Native", icon: require("../assets/iconsSkills/reactnative.png") },
        { name: "Npm", icon: require("../assets/iconsSkills/npm.png") },
        { name: "Sass", icon: require("../assets/iconsSkills/sass.png") },
        { name: "Git", icon: require("../assets/iconsSkills/git.png") },
        { name: "GitHub", icon: require("../assets/iconsSkills/github.png") }
    ];    

    return (
        <>
            <h1 className="tituloSection" id="Skills">{textos[language].titulo}</h1>
            <div className="skills">
                {skills.map((skill) => (
                    <div className="skill-item" key={skill.name}>
                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Skills;
