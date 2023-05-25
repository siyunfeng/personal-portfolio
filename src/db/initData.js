// Project Images
import vintagerImg from '../assets/img/vintagerImg.png';
import partypalImg from '../assets/img/partypalImg.png';
import theGraceBritishBakeOff from '../assets/img/the-grace-british-bake-off.png';
import guessSiyunNumber from '../assets/img/guess-siyun-number.png';

// Project Logos
import logoVintager from '../assets/img/logo-Vintager.png';
import logoTheGraceBritishBakeOff from '../assets/img/logo-the-grace-british-bake-off.png';
import logoPartyPal from '../assets/img/logo-PartyPal.png';

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
import momentJS from '../assets/icons/momentjs.svg';
import graphQL from '../assets/icons/graphql.svg';
import hygraph from '../assets/icons/hygraph.webp';
import sass from '../assets/icons/sass.svg';
import nextJS from '../assets/icons/nextjs.svg';
import yelp from '../assets/icons/yelp.svg';

const initialState = {
  projects: [
    {
      type: 'Grace Hopper',
      title: 'Vintager',
      logo: logoVintager,
      imgUrl: vintagerImg,
      githubUrl: 'https://github.com/siyunfeng/vintage_blog',
      websiteUrl: 'https://vintager.onrender.com/',
      technologies: [
        { techName: 'JavaScript', techIcon: javascript },
        { techName: 'NodeJS', techIcon: nodeJS },
        { techName: 'React', techIcon: reactJS },
        { techName: 'NextJS', techIcon: nextJS },
        { techName: 'GraphQL', techIcon: graphQL },
        { techName: 'Hygraph', techIcon: hygraph },
        { techName: 'Tailwind CSS', techIcon: tailwindCSS },
        { techName: 'Sass', techIcon: sass },
        { techName: 'MomentJS', techIcon: momentJS },
        { techName: 'HTML5', techIcon: html5 },
        { techName: 'CSS3', techIcon: css3 },
        { techName: 'WebPack', techIcon: webpack },
        { techName: 'Git', techIcon: git },
        { techName: 'Render', techIcon: onRender },
      ],
      intro: `This solo project is a blog about vintage fashion built using Next.js. Data is stored in Hygraph and queried using GraphQL. Visitors can submit comments which need to be approved by the admin before they are visible. `,
    },
    {
      type: 'Grace Hopper',
      title: 'The Grace British Bake Off',
      logo: logoTheGraceBritishBakeOff,
      imgUrl: theGraceBritishBakeOff,
      githubUrl: 'https://github.com/siyunfeng/The-Grace-British-Bake-Off',
      websiteUrl: 'https://grace-shopper-e.onrender.com/',

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
        { techName: 'WebPack', techIcon: webpack },
        { techName: 'Git', techIcon: git },
        { techName: 'Render', techIcon: onRender },
      ],
      intro: `E-commerce site selling baked goods. Our pastries are based on our favorite bakery show 'The Great British Bake Off'. `,
      soloIntro: `I was responsible for styling the website, creating the single product and cart React components, and transitioning the guest cart state from local storage to the Redux store. `,
    },
    {
      type: 'Grace Hopper',
      title: 'PartyPal',
      logo: logoPartyPal,
      imgUrl: partypalImg,
      githubUrl: 'https://github.com/siyunfeng/PartyPal',
      websiteUrl: 'https://partypal.onrender.com/',
      technologies: [
        { techName: 'JavaScript', techIcon: javascript },
        { techName: 'NodeJS', techIcon: nodeJS },
        { techName: 'React', techIcon: reactJS },
        { techName: 'Redux', techIcon: reduxJS },
        { techName: 'Express', techIcon: express },
        { techName: 'Sequelize', techIcon: sequelize },
        { techName: 'PostgreSQL', techIcon: postgreSQL },
        { techName: 'GraphQL', techIcon: graphQL },
        { techName: 'Yelp API', techIcon: yelp },
        { techName: 'HTML5', techIcon: html5 },
        { techName: 'CSS3', techIcon: css3 },
        { techName: 'Material-UI', techIcon: materialUI },
        { techName: 'React-Bootstrap', techIcon: reactbootstrap },
        { techName: 'Styled-Components', techIcon: styledComponents },
        { techName: 'MomentJS', techIcon: momentJS },
        { techName: 'WebPack', techIcon: webpack },
        { techName: 'Git', techIcon: git },
        { techName: 'Render', techIcon: onRender },
      ],
      intro: `PartyPal is an application where you can find a curated list of highly rated caterer and venue recommendations based on location for your next party! `,
    },
    {
      type: 'Game Time',
      title: `Guess Siyun's Number`,
      imgUrl: guessSiyunNumber,
      githubUrl: 'https://github.com/siyunfeng/guess-my-number',
      websiteUrl: 'https://guess-siyun-number.onrender.com/',
      techName: [],
      techIcon: [],
      intro: `A small guessing game I converted from a plain HTML, CSS and JavaScript project into React version. `,
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
    { techName: 'NextJS', techIcon: nextJS },
    { techName: 'GraphQL', techIcon: graphQL },
    { techName: 'Hygraph', techIcon: hygraph },
    { techName: 'MomentJS', techIcon: momentJS },
    { techName: 'Material-UI', techIcon: materialUI },
    { techName: 'React-Bootstrap', techIcon: reactbootstrap },
    { techName: 'Tailwind CSS', techIcon: tailwindCSS },
    { techName: 'Sass', techIcon: sass },
    { techName: 'Styled-Components', techIcon: styledComponents },
  ],
};

export default initialState;
