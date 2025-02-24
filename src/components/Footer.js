import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-social">
                    <a 
                        href="https://github.com/seyn-k" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/senthil-kumar-t-r/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a 
                        href="mailto:senthiltr2004@gmail.com" 
                        className="social-link"
                    >
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
                <div className="footer-info">
                    <p>Senthil Kumar T R  |  Artificial Intelligence and Data Science Student</p>
                    <p>Chennai Institute of Technology</p>
                </div>
                <div className="footer-copyright">
                    <p>&copy; {currentYear} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;