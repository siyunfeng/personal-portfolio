// Project Images
import vintagerImg from '../assets/img/vintagerImg.png';
import partypalImg from '../assets/img/partypalImg.png';
import theGraceBritishBakeOff from '../assets/img/the-grace-british-bake-off.png';
import guessSiyunNumber from '../assets/img/guess-siyun-number.png';

// Project Logos
import logoVintager from '../assets/img/logo-Vintager.png';
import logoTheGraceBritishBakeOff from '../assets/img/logo-the-grace-british-bake-off.png';
import logoPartyPal from '../assets/img/logo-PartyPal.png';
import logoGuessMyNumber from '../assets/img/logo-Guess-Siyun-Number.png';

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
import vercel from '../assets/icons/vercel.svg';

const initialState = {
  projects: [
    {
      type: 'Grace Hopper',
      title: 'Vintager',
      slogan: 'Vintager, where fashion history comes alive.',
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
      intro: `Vintager is a blog for you to discover timeless pieces that capture the essence of bygone eras. From elegant dresses to charming accessories, embrace the allure of vintage and add a touch of nostalgia to your style. `,
      soloIntro: `Vintager is a solo project that I used to learn Next.js and GraphQL. It is a vintage fashion blog that utilizes Hygraph for data storage and GraphQL for querying. To maintain quality content, visitor comments undergo admin approval before being displayed. `,
    },
    {
      type: 'Grace Hopper',
      title: 'The Grace British Bake Off',
      slogan: 'Delight in Every Bite, a Baking Paradise!',
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
      intro: `The Grace British Bake Off is an e-commerce site selling baked goods that based on our favorite bakery show 'The Great British Bake Off'. `,
      soloIntro: `My responsibilities included styling the website's overall design, developing React components for single product display and the cart functionality, and migrating the guest cart state from local storage to the Redux store. `,
    },
    {
      type: 'Grace Hopper',
      title: 'PartyPal',
      slogan: 'Plan your party with PartyPal',
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
      demoUrl: 'https://www.youtube.com/embed/XSrBzZxs0Gs',
      intro: `PartyPal is a platform that offers curated recommendations for caterers and venues based on location, intended for users planning their next party. `,
      soloIntro: `My main contributions to the project involved implementing user authentication and gatekeeping middleware to safeguard API routes, designing intuitive login and signup forms, search functionality, and event creation forms using MaterialUI. Additionally, I was responsible for building React components for the home page, user dashboard, and favorites page, and effectively managed state using a combination of React Hooks and Redux. `,
    },
    {
      type: 'Game Time',
      title: `Guess Siyun's Number`,
      slogan: `Unlock the Mystery, Guess Siyun's Number!`,
      logo: logoGuessMyNumber,
      imgUrl: guessSiyunNumber,
      githubUrl: 'https://github.com/siyunfeng/guess-my-number',
      websiteUrl: 'https://guessingnum.vercel.app/',
      technologies: [
        { techName: 'JavaScript', techIcon: javascript },
        { techName: 'NodeJS', techIcon: nodeJS },
        { techName: 'React', techIcon: reactJS },
        { techName: 'HTML5', techIcon: html5 },
        { techName: 'CSS3', techIcon: css3 },
        { techName: 'Git', techIcon: git },
        { techName: 'Vercel', techIcon: vercel },
      ],
      intro: `Guess Siyun's Number is an interactive guessing game where you can attempt to guess the secret number within the range of 1 to 20. Test your intuition within 5 attempts.`,
      soloIntro: `I developed this game using React, HTML, and CSS as a way to enhance my React skills. It started as my small project written in plain JavaScript, HTML, and CSS, and I transformed it into a fully functional and engaging game utilizing the power of React. `,
    },
  ],
  technologies: [
    { techName: 'JavaScript', techIcon: javascript },
    { techName: 'NodeJS', techIcon: nodeJS },
    { techName: 'React', techIcon: reactJS },
    { techName: 'NextJS', techIcon: nextJS },
    { techName: 'Redux', techIcon: reduxJS },
    { techName: 'HTML5', techIcon: html5 },
    { techName: 'CSS3', techIcon: css3 },
    { techName: 'Express', techIcon: express },
    { techName: 'Sequelize', techIcon: sequelize },
    { techName: 'PostgreSQL', techIcon: postgreSQL },
    { techName: 'GraphQL', techIcon: graphQL },
    { techName: 'Git', techIcon: git },
    { techName: 'Webpack', techIcon: webpack },
    { techName: 'React-Bootstrap', techIcon: reactbootstrap },
    { techName: 'Material-UI', techIcon: materialUI },
    { techName: 'Tailwind CSS', techIcon: tailwindCSS },
    { techName: 'Styled-Components', techIcon: styledComponents },
    { techName: 'Sass', techIcon: sass },
    { techName: 'Hygraph', techIcon: hygraph },
    { techName: 'MomentJS', techIcon: momentJS },
    { techName: 'Render', techIcon: onRender },
    { techName: 'Vercel', techIcon: vercel },
  ],
  navLinkNames: ['home', 'skills', 'projects'],
};

export default initialState;
