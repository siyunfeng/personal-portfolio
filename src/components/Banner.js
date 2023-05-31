import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/img/banner-avatar2.png';

const Banner = () => {
  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <h1>{`Hi, I'm Siyun.`}</h1>
            <h4 className='wrap'>Full Stack Developer</h4>
            <p>
              As a JavaScript developer, I possess a unique blend of creativity,
              teamwork, and rapid learning abilities. My passion lies in
              designing applications that prioritize the user experience and
              allow me to showcase my creativity.
            </p>
            <p>
              Drawing from 6 years of HR and customer service experience, my
              communication, interpersonal skills, and problem-solving abilities
              allow me to thrive in collaborative environments. I am dedicated
              to continuously improving my skills and making valuable
              contributions to impactful software development projects.
            </p>
            <a href='https://www.linkedin.com/in/siyunfeng/' target={`_blank`}>
              <button className='banner-connect-button'>Let's connect</button>
            </a>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt='Header Avatar' className='avatar' />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
