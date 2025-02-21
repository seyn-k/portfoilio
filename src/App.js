import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Skills from './components/Skills';
import './App.css';

const App = () => {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }, 2000);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollButtonClick = () => {
        if (window.scrollY > 300) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
    };

    const handleScrollToExplore = () => {
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    };

    if (loading) {
        return (
            <div className={`loading-wrapper ${fadeOut ? 'fade-out' : ''}`}>
                <LoadingScreen />
            </div>
        );
    }

    return (
        <div className="App">
            <Header />
            <main className="main-content">
                <section id="about" className="section-about">
                    <About />
                </section>
                
                <section id="skills" className="section-skills">
                    <Skills />
                </section>

                <section id="projects" className="section-projects">
                    <h2 className="section-title">Featured Projects</h2>
                    <Projects />
                </section>

                <section id="contact" className="section-contact">
                    <Contact />
                </section>
            </main>
            {showScrollButton && (
                <button className="scroll-button" onClick={handleScrollButtonClick}>
                    {window.scrollY > 300 ? 'Go to Top' : 'Go to Bottom'}
                </button>
            )}
            <div className="scroll-indicator" onClick={handleScrollToExplore}>
                <i className="fas fa-chevron-down bounce"></i>
                <span className="scroll-text">Scroll to explore</span>
            </div>
            <Footer />
        </div>
    );
};

export default App;