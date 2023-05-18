import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/img/header-avatar.png';

const Banner = () => {
  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt='Header Avatar' />
          </Col>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Welcome to My Portfolio</span>
            <h1>{`Hi, I'm Siyun.`}</h1>
            <h4 className='wrap'>Full Stack Engineer</h4>
            <p>
              I recently graduated from Fullstack Academy as a full-stack
              engineer. My first programming language is JavaScript. I enjoy
              teamwork and building applications. My 6 years of HR and customer
              service experience allowed me to develop excellent communication,
              interpersonal, and problem-solving skills.
            </p>
            <button
              className='banner-connect-button'
              onClick={() => console.log('connect button')}
            >
              Let's connect
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
