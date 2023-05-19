import { Col, Container, Row } from 'react-bootstrap';
import navLinkedIn from '../assets/img/nav-linkedin.svg';
import navGitHub from '../assets/img/nav-github.png';
import navGmail from '../assets/img/nav-icon3.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          <Col>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/siyunfeng/'>
                <img src={navLinkedIn} alt='My LinkedIn' />
              </a>
              <a href='https://github.com/siyunfeng'>
                <img src={navGitHub} alt='My GitHub' />
              </a>
              <a href='#'>
                <img src={navGmail} alt='My Email' />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
