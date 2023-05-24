const ProjectDetailCard = () => {
  return (
    <>
      <section className='intro' id='project_intro'>
        <h1 className='section__title section__title--intro'>
          <strong>Project Title</strong>
        </h1>
        <p className='section__subtitle section__subtitle--intro'>Subtitle</p>
        <img
          src='img/coins.jpeg'
          alt=''
          className='intro__img'
          id='DSLD_img'
          style={{ background: 'black' }}
        />
      </section>
      <div className='portfolio-button-container'>
        <a
          href='#home'
          className='btn'
          target='_blank'
          rel='noopener noreferrer'
        >
          {`Try it here (Wesite)`}
        </a>
        <a href='#o' className='btn' target='_blank' rel='noopener noreferrer'>
          Github
        </a>
      </div>

      <div className='portfolio-item-individual'>
        <p>Application Description</p>
        <img src='img/farhadCoin.png' id='DSLD_gif' alt='' />
        <p>Description: What did I do in this project</p>
      </div>

      <section className='tech-stack' id='tech-stack'>
        <h3 className='section__title section__title--tech'>Tech Stack</h3>

        <div className='tech'>
          <div className='tech_item'>
            TypeScript
            <span
              className='iconify'
              data-icon='logos:typescript-icon'
              data-inline='false'
            ></span>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetailCard;
