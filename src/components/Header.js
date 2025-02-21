import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-main">
                    <div className="header-intro">
                        <span className="greeting">Hello, I'm</span>
                        <h1 className="header-title">
                            <span className="name-highlight">SENTHIL KUMAR T R</span>
                        </h1>
                    </div>

                    <div className="header-roles">
                        <div className="title-animation">
                            <span className="animated-text">AI Engineer</span>
                            <span className="animated-text">Full Stack Developer</span>
                            <span className="animated-text">UI/UX Designer</span>
                            <span className="animated-text">Software Engineer</span>
                        </div>
                    </div>

                    <p className="header-description">
                        Crafting intelligent solutions through code and innovation
                    </p>

                    <div className="header-cta">
                        <a href="#about" className="cta-button primary" onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
                        }}>About Me</a>
                        <a href="#projects" className="cta-button primary" onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
                        }}>Projects</a>
                        <a href="#skills" className="cta-button primary" onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' });
                        }}>Skills</a>
                        <a href="#contact" className="cta-button secondary" onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                        }}>Contact</a>
                    </div>
                </div>

                <div className="scroll-indicator">
                    <i className="fas fa-chevron-down bounce"></i>
                    <span className="scroll-text">Scroll to explore</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
