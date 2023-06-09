// Project Images
import vintagerImg from '../assets/img/vintagerImg.png';
import partypalImg from '../assets/img/partypalImg.png';
import theGraceBritishBakeOff from '../assets/img/the-grace-british-bake-off.png';
import guessMyNumberImg from '../assets/img/guess-siyun-number.png';

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
      intro: `Vintager is a place for you to discover timeless pieces that capture the essence of bygone eras. From elegant dresses to charming accessories, embrace the allure of vintage and add a touch of nostalgia to your style. `,
      appFeatures: `Vintager is a vintage fashion blog built with Next.js and GraphQL. Users can view featured and recent posts, browse by categories, and comment on the posts. Posts and comments are moderated to ensure quality control before publishing comments. The blog data is stored and managed using Hygaph, a headless content management system, and queried using GraphQL.The site was designed using Tailwind CSS to ensure the styling is consistent and fully responsive on both desktop and mobile devices. `,
      soloIntro: ``,
    },
    {
      type: 'Grace Hopper',
      title: 'The Grace British Bake Off',
      slogan: 'Delight in Every Bite, a Baking Paradise!',
      logo: logoTheGraceBritishBakeOff,
      imgUrl: theGraceBritishBakeOff,
      githubUrl: 'https://github.com/siyunfeng/The-Grace-British-Bake-Off',
      websiteUrl: 'https://grace-bake-off.onrender.com/',
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
      intro: `The Grace British Bake Off is an e-commerce site selling baked goods based on our favorite bakery show 'The Great British Bake Off'. `,
      appFeatures: `Users can browse products, add products to cart, and checkout as a guest or registered user. `,
      soloIntro: `My responsibilities included styling the website's overall design, developing React components for the single product display and the cart functionality, and migrating the guest cart state from local storage to the Redux store when a guest creates an account. `,
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
      intro: `PartyPal is an app intended for users planning their next party that offers curated recommendations for caterers and venues based on location. `,
      appFeatures: `Users can search for caterers or venues in a specific location, filter the search results by price or cuisine, view details about a venue or caterer, and add selected venues/caterers to their Liked List. Users can then create an event and choose from the venues and/or caterers that they added to their list. `,
      soloIntro: `I designed the log-in/sign-up forms, and the event creation forms using MaterialUI and built React components for the home page, user dashboard, and favorites page. I also implemented the search functionality and user authentication and gatekeeping middleware to safeguard API routes. Finally I was responsible for managing the app state using a combination of React Hooks and Redux. `,
    },
    {
      type: 'Game Time',
      title: `Guess My Number`,
      slogan: `Unlock the Mystery, Guess My Number!`,
      logo: logoGuessMyNumber,
      imgUrl: guessMyNumberImg,
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
      intro: `Guess My Number is an interactive guessing game built using NodeJS and React. The user has 5 attempts to guess the secret number within the range of 1 to 20. `,
      appFeatures: ``,
      soloIntro: `Guess My Number started as a simple game I wrote using plain JavaScript, HTML, and CSS. I decided to rebuild the game using React and now I use it as a playground to practice various frontend skills. `,
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
