import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_black" style={{ marginTop:'700px' }}>
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">React Quiz</div>
                <div className="footer_copyright">
                Made with Love By Jatin Varlyani
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;