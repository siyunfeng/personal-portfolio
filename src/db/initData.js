// Project Images
import vintagerImg from '../assets/img/vintagerImg.png';
import partypalImg from '../assets/img/partypalImg.png';
import theGraceBritishBakeOff from '../assets/img/the-grace-british-bake-off.png';
import guessMyNumberImg from '../assets/img/guess-siyun-number.png';
import aviewcado from '../assets/img/Aviewcado.png';
import chatter from '../assets/img/chatter.png';
import aboutMeWorkingImg from '../assets/img/work-from-home-1.png';

// Project Logos
import logoVintager from '../assets/img/logo-Vintager.png';
import logoTheGraceBritishBakeOff from '../assets/img/logo-the-grace-british-bake-off.png';
import logoPartyPal from '../assets/img/logo-PartyPal.png';
import logoGuessMyNumber from '../assets/img/logo-Guess-Siyun-Number.png';
import logoAviewcado from '../assets/img/logo-Aviewcado.png';
import logoChatter from '../assets/img/logo-Chatter.png';

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
import pug from '../assets/icons/pug.png';
import bootstrap from '../assets/icons/bootstrap.svg';
import jasmine from '../assets/icons/jasmine1.svg';
import jquery from '../assets/icons/jquery.svg';
import mocha from '../assets/icons/mocha.svg';
import mongodb from '../assets/icons/mongodb.svg';
import socketio from '../assets/icons/socketio.svg';
import typescript from '../assets/icons/typescript.svg';
import sql from '../assets/icons/sql.svg';
import jwt from '../assets/icons/jwt.svg';
import chai from '../assets/icons/chai.svg';
import angular from '../assets/icons/angular.svg';
import rxjs from '../assets/icons/rxjs.svg';
import primeNG from '../assets/icons/primeng.png';

const initialState = {
  banner: {
    greeting: `Hi, I'm Siyun.`,
    title: 'Full Stack Developer',
    intro: [
      `As a JavaScript developer, I possess a unique blend of creativity, teamwork, and rapid learning abilities. My passion lies in designing applications that prioritize the user
      experience and allow me to showcase my creativity.`,
      `Drawing from 6 years of HR and customer service experience, my communication, interpersonal skills, and problem-solving abilities allow me to thrive in collaborative environments. I am dedicated to continuously improving my skills and making valuable contributions to impactful software development projects.`,
    ],
  },
  aboutme: {
    title: 'Fun Facts About Me',
    funFacts: [
      `I speak four languages: Cantonese, Mandarin, English, and
    JavaScript. I'm an animal lover, especially fond of cats and
    dogs. My favorite anime series are Naruto and One Piece. I enjoy
    traveling to new places in search of tasty foods and stunning
    views. My newest hobby is crocheting and embroidering.`,
    ],
    img: aboutMeWorkingImg,
  },
  projects: [
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
      intro: `The Grace British Bake Off is an e-commerce site built by a team of four developers that selling baked goods inspired by 'The Great British Bake Off'. `,
      appFeatures: `Users can browse products, add products to cart, and checkout as a guest or registered user. `,
      soloIntro: [
        `Developed the website's overall design using React and vanilla CSS, providing a modern and fully responsive experience for users on both mobile and desktop devices. `,
        `Designed the log-in/sign-up, cart, and checkout UI components using React, resulting in an intuitive and visually appealing user experience. `,
        `Built REST API routes for products, orders, and users using Express, effectively managing HTTP requests and implementing thorough error handling. `,
        `Architected Sequelize schemas for the order, product, and user models, defining the structure of the PostgreSQL database. `,
      ],
    },
    {
      type: 'Grace Hopper',
      title: 'PartyPal',
      slogan: 'Plan Your Party with PartyPal',
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
      intro: `PartyPal is an event planning app built in collaboration with two other engineers that is intended for users planning their next party and offers curated recommendations for caterers and venues based on location. `,
      appFeatures: `Users can search for caterers or venues in a specific location, filter the search results by price or cuisine, view details about a venue or caterer, and add selected venues/caterers to their Liked List. Users can then create an event and choose from the venues and/or caterers that they added to their list. `,
      soloIntro: [
        `Built the navigation and form components using React and Material-UI, ensuring a seamless user experience across the app. `,
        `Created RESTful APIs using Express for efficient data retrieval and created React components for users to manage events. `,
        `Implemented robust user authentication and gatekeeping middleware using Express, to safeguard the security of API routes. `,
        `Efficiently managed state changes throughout the application with React Hooks and Redux. `,
      ],
    },
    {
      type: 'Grace Hopper',
      title: 'Vintager',
      slogan: 'Vintager, Where Fashion History Comes Alive.',
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
      appFeatures: `Vintager is a vintage fashion blog built with Next.js and GraphQL. Users can view featured and recent posts, browse by categories, and comment on the posts. Posts and comments are moderated to ensure quality control before publishing comments. The blog data is stored and managed using Hygaph, a headless content management system, and queried using GraphQL. The site was designed using Tailwind CSS to ensure the styling is consistent and fully responsive on both desktop and mobile devices. `,
      soloIntro: [
        `Managed schemas, models, and data storage with Hygraph, and developed GraphQL queries to retrieve the data. `,
        `Implemented a blog commenting system with an admin moderation feature to ensure quality control before publishing. `,
        `Designed a modern, fully responsive UI with Tailwind CSS, providing a consistent user experience across a wide range of devices. `,
      ],
    },
    {
      type: 'Post Graduation',
      title: 'Aviewcado',
      slogan: `Discover Your Favorite Entertainment Gems.`,
      logo: logoAviewcado,
      imgUrl: aviewcado,
      githubUrl: 'https://github.com/siyunfeng/Aviewcado',
      websiteUrl: 'https://aviewcado.vercel.app/',
      technologies: [
        { techName: 'TypeScript', techIcon: typescript },
        { techName: 'NodeJS', techIcon: nodeJS },
        { techName: 'Angular', techIcon: angular },
        { techName: 'HTML5', techIcon: html5 },
        { techName: 'Sass', techIcon: sass },
        { techName: 'RxJS', techIcon: rxjs },
        { techName: 'PrimeNG', techIcon: primeNG },
        { techName: 'Git', techIcon: git },
        { techName: 'Vercel', techIcon: vercel },
      ],
      intro: `Aviewcado is a website that provides information on the latest and most popular movies and TV shows. It was built with TypeScript and Angular that fetches and displays data from The Movie Database (TMDB) API.`,
      appFeatures: `Users can browse movies and TV shows by genre or search by title. Once a specific movie or TV show is selected users are redirected to an overview page that displays details about the movie or show, photos of the cast, official videos and images, and TMDB reviews. `,
      soloIntro: [
        `Designed a fully responsive website by leveraging PrimeNG components for enhanced user interfaces and functionality. `,
        `Developed reusable Angular components and services to fetch and display data from The Movie Database (TMDB) API. `,
        `Leveraged TypeScript's type safety to enhance error handling, preventing runtime errors and improving overall code quality. `,
      ],
    },
    {
      type: 'Post Graduation',
      title: 'Chatter',
      slogan: `Connecting Minds, Creating Bonds! `,
      logo: logoChatter,
      imgUrl: chatter,
      githubUrl: 'https://github.com/siyunfeng/chatter',
      websiteUrl: '',
      technologies: [
        { techName: 'JavaScript', techIcon: javascript },
        { techName: 'NodeJS', techIcon: nodeJS },
        { techName: 'Pug', techIcon: pug },
        { techName: 'jQuery', techIcon: jquery },
        { techName: 'MongoDB', techIcon: mongodb },
        { techName: 'Express', techIcon: express },
        { techName: 'Socket IO', techIcon: socketio },
        { techName: 'HTML5', techIcon: html5 },
        { techName: 'CSS3', techIcon: css3 },
        { techName: 'Bootstrap', techIcon: bootstrap },
        { techName: 'Git', techIcon: git },
        { techName: 'Vercel', techIcon: vercel },
      ],
      intro: `A social media app based on Twitter that I built as a solo project to learn MongoDB, Mongoose, SocketIO, jQuery, and Pug. `,
      appFeatures: `Users can seamlessly create accounts and customize their accounts with usernames and profile pictures, create and publish posts, interact with posts by liking, reposting, and replying. With Chatter's search feature, users can explore other users and posts. Chatter's direct messaging feature allows users to connect with their followers and follow. `,
      soloIntro: [
        `Utilized Socket.IO for real-time, bi-directional communication, enabling instant messaging and live notifications between users. `,
        `Architectured MongoDB schemas using Mongoose to streamline the modeling, validation, and querying of data, resulting in a flexible and scalable database layer. `,
        `Designed a dynamic and responsive web interface by seamlessly integrating Pug for front-end templating and jQuery for interactive client-side scripting, enhancing the overall user experience and website functionality. `,
      ],
    },
    {
      type: 'Post Graduation',
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
      soloIntro: [
        `Guess My Number started as a simple game I wrote using plain JavaScript, HTML, and CSS. I decided to rebuild the game using React and now I use it as a playground to practice various frontend skills. `,
      ],
    },
  ],
  technologies: [
    { techName: 'NodeJS', techIcon: nodeJS },
    { techName: 'JavaScript', techIcon: javascript },
    { techName: 'TypeScript', techIcon: typescript },
    { techName: 'React', techIcon: reactJS },
    { techName: 'NextJS', techIcon: nextJS },
    { techName: 'Angular', techIcon: angular },
    { techName: 'Express', techIcon: express },
    { techName: 'HTML5', techIcon: html5 },
    { techName: 'CSS3', techIcon: css3 },
    { techName: 'Redux', techIcon: reduxJS },
    { techName: 'Sequelize', techIcon: sequelize },
    { techName: 'PostgreSQL', techIcon: postgreSQL },
    { techName: 'GraphQL', techIcon: graphQL },
    { techName: 'MongoDB', techIcon: mongodb },
    { techName: 'jQuery', techIcon: jquery },
    { techName: 'Socket IO', techIcon: socketio },
    { techName: 'SQL', techIcon: sql },
    { techName: 'Pug', techIcon: pug },
    { techName: 'JWT', techIcon: jwt },
    { techName: 'Jasmine', techIcon: jasmine },
    { techName: 'Mocha', techIcon: mocha },
    { techName: 'Chai', techIcon: chai },
    { techName: 'Bootstrap', techIcon: bootstrap },
    { techName: 'React-Bootstrap', techIcon: reactbootstrap },
    { techName: 'Material-UI', techIcon: materialUI },
    { techName: 'Tailwind CSS', techIcon: tailwindCSS },
    { techName: 'Styled-Components', techIcon: styledComponents },
    { techName: 'Sass', techIcon: sass },
    { techName: 'PrimeNG', techIcon: primeNG },
    { techName: 'RxJS', techIcon: rxjs },
    { techName: 'Git', techIcon: git },
    { techName: 'Webpack', techIcon: webpack },
    { techName: 'Hygraph', techIcon: hygraph },
    { techName: 'MomentJS', techIcon: momentJS },
    { techName: 'Render', techIcon: onRender },
    { techName: 'Vercel', techIcon: vercel },
  ],
  navLinkNames: ['home', 'skills', 'projects', 'about me'],
};

export default initialState;
