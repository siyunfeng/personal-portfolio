import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

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

    // const removeOnScroll = () => window.removeEventListener('scroll', onScroll);
    // return removeOnScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  //   const updateActiveLink = (activedLink) => setActiveLink(activedLink);

  return (
    <Navbar expand='lg' className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href='#home'>
          <img src={logo} alt='logo' />
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
              onClick={setActiveLink('home')}
              //   onClick={() => updateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href='#skills'
              className={
                activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={setActiveLink('skills')}
              //   onClick={() => updateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href='#projects'
              className={
                activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={setActiveLink('projects')}
              //   onClick={() => updateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
            {/* <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='#'>
                <img src={navIcon1} alt='' />
              </a>
              <a href='#'>
                <img src={navIcon2} alt='' />
              </a>
              <a href='#'>
                <img src={navIcon3} alt='' />
              </a>
            </div>
            <button
              className='navbar-button'
              onClick={() => console.log('connect button works')}
            >
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
