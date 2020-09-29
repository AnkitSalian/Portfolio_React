import React from 'react';
import Typical from 'react-typical';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Header.css';

const Header = () => {
    return (
        <div className="flex__container">
            {/* <header className="nav__header">
                <a href="#" className="logo">Portfolio</a>
                <div className="toggle"></div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Resume</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </header> */}
            <div className="header">
                <img src="/images/header-background.jpg" />
                <div className="content">
                    <h2>Hi, I'm Ankit Salian</h2>
                    <br />
                    <h3>I'm a
                    <Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                ' Fullstack Developer',
                                1000,
                                ' Designer',
                                1000,
                                ' Sketcher',
                                1000
                            ]}
                        />
                    </h3>
                    <br />
                    <div className="header__container">
                        <ul>
                            <li><a className="header__icons" href="https://www.facebook.com/ankit.salian1/" target="_blank"><FacebookIcon fontSize="large" /></a></li>
                            <li><a className="header__icons" href="https://www.linkedin.com/in/ankit-salian-173945107/" target="_blank"><LinkedInIcon fontSize="large" /></a></li>
                            <li><a className="header__icons" href="https://github.com/AnkitSalian" target="_blank"><GitHubIcon fontSize="large" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
