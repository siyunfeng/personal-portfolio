import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

const TechnicalSkills = ({ technologies }) => {
  const skills = technologies;

  return (
    <section className='skills' id='skills'>
      <Container>
        <h2>Technologies</h2>
        <div className='skills-list'>
          {skills.map((skill, index) => {
            return (
              <div className='each-skill' key={index}>
                <div className='tech-icon'>
                  <img src={skill.techIcon} alt={skill.techName} />
                </div>
                <div className='tech-name'>{skill.techName}</div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

const mapState = (state) => {
  return {
    technologies: state.technologies,
  };
};

export default connect(mapState)(TechnicalSkills);
