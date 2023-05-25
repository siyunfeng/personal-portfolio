import { connect } from 'react-redux';

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
    imgUrl,
    githubUrl,
    websiteUrl,
    technologies,
    intro,
    soloIntro,
  } = project;
  // console.log('project =', title, intro, githubUrl, websiteUrl);

  return (
    <>
      <section className='intro' id='project_intro'>
        <h1 className='section__title section__title--intro'>
          <strong className='title'>{title}</strong>
        </h1>
        <p className='section__subtitle section__subtitle--intro'>{slogan}</p>
        <img src={logo} alt={title} className='intro__img' />
      </section>
      <div className='portfolio-button-container'>
        <a href={websiteUrl} target='_blank' rel='noopener noreferrer'>
          <button className='proj-details-button'>Try it</button>
        </a>
        <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
          <button className='proj-details-button'>GitHub</button>
        </a>
      </div>

      <div className='portfolio-item-individual'>
        <p className='portfolio-item-intro'>{intro}</p>
        <img src='#' alt='' />
        <p className='portfolio-item-intro'>{soloIntro}</p>
      </div>

      <section className='tech-stack' id='tech-stack'>
        <h3 className='section__title section__title--tech'>Tech Stack</h3>
        <div className='skills-list' id='tech-stack-list'>
          {technologies.map((tech, index) => {
            return (
              <div className='each-skill' key={index}>
                <div className='tech-icon'>
                  <img src={tech.techIcon} alt={tech.techName} />
                </div>
                <div className='tech-name'>{tech.techName}</div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

const mapState = (state) => {
  return {
    projects: state.projects,
  };
};

export default connect(mapState)(ProjectDetailCard);
