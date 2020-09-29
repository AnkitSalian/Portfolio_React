import React, { useState, useRef, useEffect } from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import { Link, animateScroll as scroll } from "react-scroll";
import MenuIcon from '@material-ui/icons/Menu';
import './NavBar.css';

const NavBar = ({ hideOnScroll }) => {

    const prevScrollY = useRef(0);

    const [goingUp, setGoingUp] = useState(false);
    const [hideNav, setHideNav] = useState(false);
    const [backgroundVal, setBackgroundVal] = useState("Home");
    const [toogleMenu, setToggleMenu] = useState(true);

    const handleToggle = () => {
        setToggleMenu(!toogleMenu);
    }

    function useWindowSize() {

        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });

        useEffect(() => {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }

            // Add event listener
            window.addEventListener("resize", handleResize);

            // Call handler right away so state gets updated with initial window size
            handleResize();

            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }, []); // Empty array ensures that effect is only run on mount

        return windowSize;
    }

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (prevScrollY.current < currentScrollY && goingUp) {
                setGoingUp(false);
            }
            if (prevScrollY.current > currentScrollY && !goingUp) {
                setGoingUp(true);
            }

            prevScrollY.current = currentScrollY;
            if (parseInt(currentScrollY) >= 220 && parseInt(currentScrollY) <= 460) {
                setHideNav(true)
            } else {
                setHideNav(false);
            }

            if (parseInt(currentScrollY) >= 220 && parseInt(currentScrollY) < 661) {
                setBackgroundVal("Home");
            } else if (parseInt(currentScrollY) >= 662 && parseInt(currentScrollY) < 1585) {
                setBackgroundVal("About");
            } else if (parseInt(currentScrollY) >= 1585 && parseInt(currentScrollY) < 2745) {
                setBackgroundVal("Resume");
            } else if (parseInt(currentScrollY) >= 220 && parseInt(currentScrollY) <= 460) {
                setBackgroundVal("Works");
            } else if (parseInt(currentScrollY) >= 220 && parseInt(currentScrollY) <= 460) {
                setBackgroundVal("Testimonials");
            } else if (parseInt(currentScrollY) >= 220) {
                setBackgroundVal("Contact");
            }

        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [goingUp]);

    const scrollToTop = () => {
        scroll.scrollToTop();
        if (window.innerWidth <= 768) {
            handleToggle();
        }
    };

    const size = useWindowSize();

    return (
        <>
            <header className="nav__header" style={{ display: hideNav ? "none" : "flex", background: backgroundVal === "Home" ? "none" : "rgba(0,0,0,.75)" }}>
                {/* <a href="#" className="logo">Portfolio</a> */}

                <ul style={{ display: size.width <= 768 ? (toogleMenu ? "none" : "flex") : "flex" }}>

                    <li><Link
                        activeClass="active"
                        to="land"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={scrollToTop}
                    >
                        Home
                </Link></li>
                    <li><Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={handleToggle}
                    >
                        About
                </Link></li>
                    <li><Link
                        activeClass="active"
                        to="resume"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={handleToggle}
                    >
                        Resume
                </Link></li>
                    <li><Link
                        activeClass="active"
                        to="skill"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={handleToggle}
                    >
                        Skills
                </Link></li>
                    <li><Link
                        activeClass="active"
                        to="work"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={handleToggle}
                    >
                        Works
                </Link></li>
                    <li><Link
                        activeClass="active"
                        to="testimonial"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={handleToggle}
                    >
                        Testimonials
                </Link></li>
                    <li><Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={handleToggle}
                    >
                        Contact
                </Link></li>

                </ul>
                <div className="toggle" onClick={handleToggle}></div>
            </header>
        </>
    )
}

export default NavBar;
