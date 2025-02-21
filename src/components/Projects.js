import React from 'react';

const Projects = () => {
    const projects = [
        {
            name: "Weather Chatbot",
            description: "Accurate weather solutions. Developed a conversational AI weather chatbot using Python and Firebase, incorporating NLU for real-time, location-based weather updates and alerts. Gained valuable experience in designing user-centric conversational interfaces.",
            tech: ["Python", "Firebase", "NLU"]
        },
        {
            name: "Harry the AI assistant",
            description: "Developed an AI assistant using Python, enabling task scheduling, question answering, and reminders. Utilized Speech-recognition for effective user interaction. Gained practical experience in building intelligent, user-friendly assistant systems.",
            tech: ["Python", "Speech-recognition"]
        },
        {
            name: "Portfolio Website using MERN stack",
            description: "Developed a dynamic portfolio website using the MERN stack (React, Node.js). Features include responsive design, CMS, and contact form. Gained practical experience in full-stack web development.",
            tech: ["MERN", "React", "Node.js"]
        },
        {
            name: "Spotify Clone Website",
            description: "Created a Spotify clone website that includes user authentication, music streaming, playlist creation, and search functionality. Gained experience in building complex web applications with a focus on user experience.",
            tech: ["React", "Node.js", "Express", "MongoDB"]
        }
    ];

    return (
        <div className="projects-grid">
            {projects.map((project, index) => (
                <div key={index} className="project-card">
                    <div className="project-content">
                        <h3 className="project-title">{project.name}</h3>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tech">
                            {project.tech.map((tech, idx) => (
                                <span key={idx} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
