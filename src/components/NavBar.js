import { useState, useEffect } from "react";
import Loader from 'react-loaders'
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import 'loaders.css/loaders.min.css';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setLoading(true);
    setActiveLink(value);

    // Simulate loading for 2 seconds
    setTimeout(() => {
      setLoading(false);
      const target = document.querySelector(`#${value}`);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }, 600);
  };


  return (
    <Router>
      {loading && (
        <div className="loader-container">
          <Loader type="pacman" />
        </div>
      )}

      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/" style={{ marginRight: 'auto', color: 'white', fontSize: '24px', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
            Alen Jacob<span style={{ fontWeight: 'bold', fontSize: '28px' }}>.</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                onClick={() => onUpdateActiveLink('home')}
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => onUpdateActiveLink('skills')}
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                onClick={() => onUpdateActiveLink('projects')}
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              >
                Projects
              </Nav.Link>

            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/alen-jacob-3ba2b2224/" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a href="https://github.com/alenjacs" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon2} alt="GitHub" />
                </a>
                <a href="https://www.youtube.com/@alenjacs" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon3} alt="YouTube" />
                </a>
                
              </div>



            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
