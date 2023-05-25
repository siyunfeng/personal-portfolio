import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo3.png';
import navLinkedIn from '../assets/img/nav-linkedin.svg';
import navGitHub from '../assets/img/nav-github.png';
import navGmail from '../assets/img/nav-email.png';
import { Link } from 'react-router-dom';
import { onScroll } from '../helperFunctions';
import { connect } from 'react-redux';

const NavBar = (props) => {
  const { navLinkNames } = props;
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', onScroll(setScrolled));

    const removeOnScroll = () =>
      window.removeEventListener('scroll', onScroll(setScrolled));
    return removeOnScroll();
  }, []);

  const updateActiveLink = (activedLink) => setActiveLink(activedLink);

  const navLinks = (navLink) => {
    const linkName = navLink.charAt(0).toUpperCase() + navLink.slice(1);

    return (
      <Link
        to={`/${navLink}`}
        className={
          activeLink === navLink ? 'active navbar-link' : 'navbar-link'
        }
        onClick={() => updateActiveLink(navLink)}
        key={navLink}
      >
        {linkName}
      </Link>
    );
  };

  return (
    <Navbar expand='lg' className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand>
          <img src={logo} alt='logo' id='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            {navLinkNames.map((navLinkName) => navLinks(navLinkName))}
          </Nav>
          <Nav className='navbar-text'>
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const mapState = (state) => {
  return {
    navLinkNames: state.navLinkNames,
  };
};

export default connect(mapState)(NavBar);
