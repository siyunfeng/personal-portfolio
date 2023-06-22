import { Tab, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import { connect } from 'react-redux';

const Projects = (props) => {
  const { projects } = props;
  const ghProject = projects.filter(
    (project) => project.type === 'Grace Hopper'
  );
  const gameTimeProject = projects.filter(
    (project) => project.type === 'Game Time'
  );

  return (
    <section className='project' id='projects'>
      <div>
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
              <div className='project-card-container'>
                {ghProject.map((project, index) => (
                  <ProjectCard
                    key={index}
                    {...project}
                    className='each-project-card'
                  />
                ))}
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey='second'>
              <div className='project-card-container'>
                {gameTimeProject.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey='third'>
              <p className='proj-coming-soon'>Coming soon...</p>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </section>
  );
};

const mapState = (state) => {
  return {
    projects: state.projects,
  };
};

export default connect(mapState)(Projects);
