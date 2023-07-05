import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ProjectDetailCard = (props) => {
  const { projects } = props;
  const projectTitle = props.match.params.title;

  const project = projects.filter(
    (project) => project.title === projectTitle
  )[0];
  const {
    title,
    slogan,
    logo,
    demoUrl,
    githubUrl,
    websiteUrl,
    technologies,
    intro,
    appFeatures,
    soloIntro,
  } = project;

  return (
    <section id='project-details'>
      <div className='back-to-projects'>
        <Link to='/projects'>
          <button className='proj-details-button back-to-proj-button'>
            Back to projects
          </button>
        </Link>
      </div>
      <div className='proj-details-main'>
        <div className='intro'>
          <h1 className='section__title section__title--intro'>
            <strong className='title'>{title}</strong>
          </h1>
          <p className='section__subtitle section__subtitle--intro'>{slogan}</p>
          <img src={logo} alt={title} className='intro__img' />
        </div>
        <div className='portfolio-button-container'>
          <a href={websiteUrl} target='_blank' rel='noopener noreferrer'>
            <button className='proj-details-button'>Try it</button>
          </a>
          <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
            <button className='proj-details-button'>GitHub</button>
          </a>
        </div>

        {demoUrl ? (
          <div className='demo-video-container'>
            <iframe
              className='demo-video'
              src={demoUrl}
              title={title}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          ''
        )}

        <div className='portfolio-item-individual'>
          <p className='portfolio-item-intro'>{intro}</p>
          {appFeatures ? (
            <p className='portfolio-item-intro'>{appFeatures}</p>
          ) : (
            ''
          )}
          {soloIntro ? <p className='portfolio-item-intro'>{soloIntro}</p> : ''}
        </div>

        <div className='tech-stack' id='tech-stack'>
          <h3 className='section__title section__title--tech'>Tech Stack</h3>
          <div className='skills-list' id='tech-stack-list'>
            {technologies.map((tech, index) => {
              return (
                <div className='each-skill' key={index}>
                  <div className='tech-icon'>
                    <img src={tech.techIcon} alt={tech.techName} />
                  </div>
                  <div className='tech-name portfolio-item-intro'>
                    {tech.techName}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const mapState = (state) => {
  return {
    projects: state.projects,
  };
};

export default connect(mapState)(ProjectDetailCard);
