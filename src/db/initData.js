// Project Images
import vintagerImg from '../assets/img/vintagerImg.png';
import partypalImg from '../assets/img/partypalImg.png';
import theGraceBritishBakeOff from '../assets/img/the-grace-british-bake-off.png';
import guessSiyunNumber from '../assets/img/guess-siyun-number.png';

// Technologies Icons
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
import tailwindCSS from '../assets/icons/tailwindcss.svg';

const initialState = {
  projects: [
    {
      title: 'Vintager',
      description: `This solo project is a blog about vintage fashion built using Next.js. Data is stored in Hygraph and queried using GraphQL. Visitors can submit comments which need to be approved by the admin before they are visible.`,
      imgUrl: vintagerImg,
      githubUrl: 'https://github.com/siyunfeng/vintage_blog',
      websiteUrl: 'https://vintager.onrender.com/',
      type: 'Grace Hopper',
    },
    {
      title: 'The Grace British Bake Off',
      description: `PartyPal is an application where you can find a curated list of highly rated caterer and venue recommendations based on location for your next party!`,
      imgUrl: theGraceBritishBakeOff,
      githubUrl: 'https://github.com/siyunfeng/The-Grace-British-Bake-Off',
      websiteUrl: 'https://grace-shopper-e.onrender.com/',
      type: 'Grace Hopper',
    },
    {
      title: 'PartyPal',
      description: `E-commerce site selling baked goods. I was responsible for styling the website, creating the single product and cart React components, and transitioning the guest cart state from local storage to the Redux store.`,
      imgUrl: partypalImg,
      githubUrl: 'https://github.com/siyunfeng/PartyPal',
      websiteUrl: 'https://partypal.onrender.com/',
      type: 'Grace Hopper',
    },
    {
      title: `Guess Siyun's Number`,
      description: `A small guessing game I converted from a plain HTML, CSS and JavaScript project into React version. `,
      imgUrl: guessSiyunNumber,
      githubUrl: 'https://github.com/siyunfeng/guess-my-number',
      websiteUrl: 'https://guess-siyun-number.onrender.com/',
      type: 'Game Time',
    },
  ],
  technologies: [
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
    { techName: 'Tailwind CSS', techIcon: tailwindCSS },
    { techName: 'Styled-Components', techIcon: styledComponents },
  ],
};

export default initialState;
