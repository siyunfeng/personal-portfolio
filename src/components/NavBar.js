import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo3.png';
import navLinkedIn from '../assets/img/nav-linkedin.svg';
import navGitHub from '../assets/img/nav-github.png';
import navGmail from '../assets/img/nav-icon3.svg';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    const removeOnScroll = () => window.removeEventListener('scroll', onScroll);
    return removeOnScroll();
  }, []);

  const updateActiveLink = (activedLink) => setActiveLink(activedLink);

  return (
    <Navbar expand='lg' className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href='#home'>
          <img src={logo} alt='logo' id='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <span className='navbar-toggler-icon'> </span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link
              href='#home'
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => updateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href='#skills'
              className={
                activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => updateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href='#project'
              className={
                activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => updateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/siyunfeng/'>
                <img src={navLinkedIn} alt='My LinkedIn' />
              </a>
              <a href='https://github.com/siyunfeng'>
                <img src={navGitHub} alt='My GitHub' />
              </a>
              <a href='#'>
                <img src={navGmail} alt='My Email' />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
