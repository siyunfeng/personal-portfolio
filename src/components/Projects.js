import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import { connect } from 'react-redux';

const Projects = (props) => {
  const { ghProject, gameTimeProject } = props;
  console.log('props >>>', props);

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p></p>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
              <Nav
                variant='pills'
                id='pills-tab'
                className='nav-pills mb-5 justify-content-center align-items-center'
              >
                <Nav.Item>
                  <Nav.Link eventKey='first'>Boot Camp</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Game Time</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'>Cheatsheets</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {ghProject.map((project, index) => (
                      <ProjectCard
                        key={index}
                        {...project}
                        className='each-project-card'
                      />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <Row>
                    {gameTimeProject.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='third'>
                  <p className='proj-coming-soon'>Coming soon...</p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const mapState = (state) => {
  return {
    ghProject: state.ghProject,
    gameTimeProject: state.gameTimeProject,
  };
};

export default connect(mapState)(Projects);
