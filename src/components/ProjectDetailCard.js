import { connect } from 'react-redux';

const ProjectDetailCard = (props) => {
  const { projects } = props;
  const projectTitle = props.match.params.title;

  const project = projects.filter(
    (project) => project.title === projectTitle
  )[0];
  const {
    title,
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
          <strong>{title}</strong>
        </h1>
        <p className='section__subtitle section__subtitle--intro'>Subtitle</p>
        <img src={logo} alt={title} className='intro__img' />
      </section>
      <div className='portfolio-button-container'>
        <a
          href={websiteUrl}
          className='btn'
          target='_blank'
          rel='noopener noreferrer'
        >
          Try it
        </a>
        <a
          href={githubUrl}
          className='btn'
          target='_blank'
          rel='noopener noreferrer'
        >
          Github
        </a>
      </div>

      <div className='portfolio-item-individual'>
        <p>{intro}</p>
        <img src='img/farhadCoin.png' id='DSLD_gif' alt='' />
        <p>{soloIntro}</p>
      </div>

      <section className='tech-stack' id='tech-stack'>
        <h3 className='section__title section__title--tech'>Tech Stack</h3>
        <div className='skills-list'>
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
