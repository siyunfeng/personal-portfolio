import { Col, Container, Row } from 'react-bootstrap';
import navLinkedIn from '../assets/img/nav-linkedin.svg';
import navGitHub from '../assets/img/nav-github.png';
import navGmail from '../assets/img/nav-email.png';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <hr />
      <Container className='footer'>
        <Row className='align-items-center footer-box'>
          <Col>
            <div className='social-icon'>
              <a
                href='https://www.linkedin.com/in/siyunfeng/'
                target={`_blank`}
              >
                <img src={navLinkedIn} alt='My LinkedIn' />
              </a>
              <a href='https://github.com/siyunfeng' target={`_blank`}>
                <img src={navGitHub} alt='My GitHub' />
              </a>
              <a href='mailto:siyunf21@gmail.com' target={`_blank`}>
                <img src={navGmail} alt='My Email' />
              </a>
            </div>
          </Col>
          <Col>
            <p className='copy-right'>Made with ❤️ in New York</p>
            <p className='copy-right'>© {date} Siyun Feng</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
