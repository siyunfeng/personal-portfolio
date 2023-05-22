import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo3.png';
import navLinkedIn from '../assets/img/nav-linkedin.svg';
import navGitHub from '../assets/img/nav-github.png';
import navGmail from '../assets/img/nav-email.png';

const navLinkNames = ['home', 'skills', 'projects'];

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

  const navLinks = (navLink) => {
    const linkName = navLink.charAt(0).toUpperCase() + navLink.slice(1);

    return (
      <Nav.Link
        href={`#${navLink}`}
        className={
          activeLink === navLink ? 'active navbar-link' : 'navbar-link'
        }
        onClick={() => updateActiveLink(navLink)}
      >
        {linkName}
      </Nav.Link>
    );
  };

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
            {navLinkNames.map((navLinkName) => navLinks(navLinkName))}
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a
                href='https://www.linkedin.com/in/siyunfeng/'
                target={`_blank`}
              >
                <img src={navLinkedIn} alt='My LinkedIn' />
              </a>
              <a href='https://github.com/siyunfeng' target={`_blank`}>
                <img src={navGitHub} alt='My GitHub' />
              </a>
              <a href='mailto:siyunf21@gmail.com' target={`_blank`}>
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
