import vintagerImg from '../assets/img/vintagerImg.png';
import partypalImg from '../assets/img/partypalImg.png';
import theGraceBritishBakeOff from '../assets/img/the-grace-british-bake-off.png';
import guessSiyunNumber from '../assets/img/guess-siyun-number.png';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const ghProject = [
    {
      title: 'Vintager',
      description: `This solo project is a blog about vintage fashion built using Next.js. Data is stored in Hygraph and queried using GraphQL. Visitors can submit comments which need to be approved by the admin before they are visible.`,
      imgUrl: vintagerImg,
      githubUrl: 'https://github.com/siyunfeng/vintage_blog',
      websiteUrl: 'https://vintager.onrender.com/',
    },
    {
      title: 'The Grace British Bake Off',
      description: `PartyPal is an application where you can find a curated list of highly rated caterer and venue recommendations based on location for your next party!`,
      imgUrl: theGraceBritishBakeOff,
      githubUrl: 'https://github.com/siyunfeng/The-Grace-British-Bake-Off',
      websiteUrl: 'https://grace-shopper-e.onrender.com/',
    },
    {
      title: 'PartyPal',
      description: `E-commerce site selling baked goods. I was responsible for styling the website, creating the single product and cart React components, and transitioning the guest cart state from local storage to the Redux store.`,
      imgUrl: partypalImg,
      githubUrl: 'https://github.com/siyunfeng/PartyPal',
      websiteUrl: 'https://partypal.onrender.com/',
    },
  ];

  const gameTimeProject = [
    {
      title: `Guess Siyun's Number`,
      description: `A small guessing game I converted from a plain HTML, CSS and JavaScript project into React version. `,
      imgUrl: guessSiyunNumber,
      githubUrl: 'https://github.com/siyunfeng/guess-my-number',
      websiteUrl: 'https://guess-siyun-number.onrender.com/',
    },
    {
      title: 'Pig Game',
      description: ``,
      imgUrl: '',
      githubUrl: '',
      websiteUrl: '',
    },
  ];

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p></p>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
              <Nav
                variant='pills'
                className='nav-pills mb-5 justify-content-center align-items-center'
                id='pills-tab'
              >
                <Nav.Item>
                  <Nav.Link eventKey='first'>Boot Camp</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Game Time</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'>Cheatsheets</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {ghProject.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <Row>
                    {gameTimeProject.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='third'>
                  <p className='proj-coming-soon'>Coming soon...</p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
