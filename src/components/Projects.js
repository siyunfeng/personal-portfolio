import { Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import { connect } from 'react-redux';

const Projects = (props) => {
  const { projects } = props;

  return (
    <section className='project' id='projects'>
      <div>
        <h2>Projects</h2>
        <p></p>
        <Tab.Container id='projects-tabs' defaultActiveKey='first'>
          <Tab.Content>
            <Tab.Pane eventKey='first'>
              <div className='project-card-container'>
                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    {...project}
                    className='each-project-card'
                  />
                ))}
              </div>
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
