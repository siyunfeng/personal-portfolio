import { Container } from 'react-bootstrap';
import javascript from '../assets/icons/javascript.svg';
import nodeJS from '../assets/icons/nodejs.svg';
import reactJS from '../assets/icons/reactjs.svg';
import reduxJS from '../assets/icons/redux.svg';
import express from '../assets/icons/express.svg';
import sequelize from '../assets/icons/sequelize.svg';
import postgreSQL from '../assets/icons/postgresql.svg';
import html5 from '../assets/icons/html-5.svg';
import css3 from '../assets/icons/css-3.svg';
import git from '../assets/icons/git.svg';
import webpack from '../assets/icons/webpack.svg';
import materialUI from '../assets/icons/material-ui.svg';
import reactbootstrap from '../assets/icons/reactbootstrap.svg';
import styledComponents from '../assets/icons/styledcomponents.svg';
import onRender from '../assets/icons/render.svg';

const TechnicalSkills = () => {
  const skills = [
    { techName: 'JavaScript', techIcon: javascript },
    { techName: 'NodeJS', techIcon: nodeJS },
    { techName: 'React', techIcon: reactJS },
    { techName: 'Redux', techIcon: reduxJS },
    { techName: 'Express', techIcon: express },
    { techName: 'Sequelize', techIcon: sequelize },
    { techName: 'PostgreSQL', techIcon: postgreSQL },
    { techName: 'HTML5', techIcon: html5 },
    { techName: 'CSS3', techIcon: css3 },
    { techName: 'Git', techIcon: git },
    { techName: 'Webpack', techIcon: webpack },
    { techName: 'Render', techIcon: onRender },
    { techName: 'Material UI', techIcon: materialUI },
    { techName: 'React Bootstrap', techIcon: reactbootstrap },
    { techName: 'Styled-Components', techIcon: styledComponents },
  ];

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

export default TechnicalSkills;
