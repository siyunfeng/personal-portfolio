import { useState, useEffect } from 'react';
import vintagerImg from '../assets/img/vintagerImg.png';
import partypalImg from '../assets/img/partypalImg.png';
import theGraceBritishBakeOff from '../assets/img/the-grace-british-bake-off.png';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Vintager',
      description: `This solo project is a blog about vintage fashion built using Next.js. Data is stored in Hygraph and queried using GraphQL. Visitors can submit comments which need to be approved by the admin before they are visible.`,
      imgUrl: vintagerImg,
    },
    {
      title: 'The Grace British Bake Off',
      description: `PartyPal is an application where you can find a curated list of highly rated caterer and venue recommendations based on location for your next party!`,
      imgUrl: theGraceBritishBakeOff,
    },
    {
      title: 'PartyPal',
      description: `E-commerce site selling baked goods. I was responsible for styling the website, creating the single product and cart React components, and transitioning the guest cart state from local storage to the Redux store.`,
      imgUrl: partypalImg,
    },
  ];
  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p></p>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
              <Nav
                variant='pills'
                className='nav-pills mb-5 justify-content-center align-items-center'
                id='pills-tab'
              >
                <Nav.Item>
                  <Nav.Link eventKey='first'>Boot Camp</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>My Notes</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'>Algorithms Practice</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <p>Coming soon...</p>
                </Tab.Pane>
                <Tab.Pane eventKey='third'>
                  <p>Coming soon...</p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
