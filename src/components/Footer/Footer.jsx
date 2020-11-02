import React, {Fragment} from 'react';

//Icons
import {FaGithub as Github} from 'react-icons/fa';
import {FaLinkedinIn as LinkedIn} from 'react-icons/fa';

//Styles
import './footer-styles.scss';

const Footer = () => {

    return (
        <Fragment>
            <div className="footer-container">

                <footer>
                    <div className="icons-container">
                    <a href="https://www.linkedin.com/in/samreskala/" target="blank"><LinkedIn /></a>
                    <a href="https://github.com/sreskala" target="blank"><Github /></a>
                    </div>
                    
                    <p>Sam Reskala 2020 ©</p>
                </footer>

            </div>
        </Fragment>
    )
}

export default Footer;