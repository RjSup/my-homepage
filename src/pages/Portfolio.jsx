import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../pages/Portfolio.css';

const projects = [
  {
    image: '/abaddon_lg.png',
    name: 'Conversely',
    link: 'https://github.com/RjSup/COMP5013-WebApp',
    attributes: 'A web app built with Flask and Js for people to debate.', 
  },
  {
    image: '/abaddon_lg.png',
    name: 'Croc Game',
    link: 'https://github.com/RjSup/go-ray',
    attributes: 'An adventure game created using Raylib, and C++.', 
  },
  {
    image: '/abaddon_lg.png',
    name: 'VetVision',
    link: 'https://github.com/RjSup/vet-vision',
    attributes: 'A Flask app used for determining healthy, fractured and broken bones in common animals.', 
  },
  {
    image: '/abaddon_lg.png',
    name: 'Dota 2 Hero Helper',
    link: 'https://github.com/RjSup/api-prac',
    attributes: 'A web app for helping people choose which Dota 2 heroes to choose. Built with svelte js.', 
  },
  {
    image: '/abaddon_lg.png',
    name: 'Text Adventure',
    link: 'https://github.com/RjSup/TextAdventure-Coursework',
    attributes: 'A text adventure game built using C++.', 
  },

];

const ProjectCard = ({ project }) => {
  return (
    <div className="card">
      <img src={project.image} alt={project.name} className="card-image" />
      <h2 className="card-title">{project.name}</h2>
      <p className="card-attributes">{project.attributes}</p>
      <a href={project.link} className="card-link">Visit Project</a>
    </div>
  );
};

const CardContainer = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='portdiv'>
        <h1>My Projects</h1>
        <div className="card-container">
            <AnimatePresence>
                {projects.map((project, index) => (
                    <motion.div
                        key={project.name}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: index * 0.2 }}
                        variants={cardVariants}
                    >
                    <ProjectCard project={project} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    </div>
  );
};

export default CardContainer;
