import { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import contactImg from '../assets/img/work-from-home-1.png';
import contactLogo from '../assets/img/logo3.png';

const Contact = () => {
  // const initialFormInfo = {
  //   myEmail: 'siyunf21@gmail.com',
  //   senderEmail: '',
  //   subject: '',
  //   message: '',
  // };

  const [mailToUrl, setMailToUrl] = useState('mailto:siyunf21@gmail.com');
  // const [formInfo, setFormInfo] = useState(initialFormInfo);

  // const onFormUpdate = (formInfoType, infoToUpdate) => {
  //   setFormInfo({ ...formInfo, [formInfoType]: infoToUpdate });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { myEmail, subject, message } = formInfo;
  //   const mailtoURL = `mailto:${myEmail}?subject=${encodeURIComponent(
  //     subject
  //   )}&body=${encodeURIComponent(message)}}`;

  //   setMailToUrl(mailtoURL);
  // };

  return (
    <section className='contact' id='contact'>
      <Container>
        <Row className='align-items-center contact-box'>
          <Col md={6}>
            <img src={contactImg} alt={`Let's connect!`} />
          </Col>
          <Col className='get-in-touch'>
            <h2>Get in Touch</h2>
            <img src={contactLogo} alt='logo' className='contact-logo' />
            <a href={mailToUrl}>
              <button type='submit' className='contact-send-button'>
                Email Me
              </button>
            </a>
            {/* <Form onSubmit={handleSubmit} className='contact-form'>
              <Row>
                <Form.Group as={Col} className='px-2 contact-form-label'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='email'
                    name='senderEmail'
                    value={formInfo.senderEmail}
                    placeholder='Email'
                    onChange={(e) =>
                      onFormUpdate('senderEmail', e.target.value)
                    }
                  ></Form.Control>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} className='px-2 contact-form-label'>
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type='text'
                    name='subject'
                    value={formInfo.subject}
                    placeholder='Subject'
                    onChange={(e) => onFormUpdate('subject', e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Row>
              <Row className='px-2 my-4'>
                <Form.Control
                  as='textarea'
                  name='message'
                  value={formInfo.message}
                  placeholder='Please leave your message.'
                  style={{ height: '100px' }}
                  onChange={(e) => onFormUpdate('message', e.target.value)}
                ></Form.Control>
              </Row>
              <button type='submit' className='contact-send-button'>
                <a href={mailToUrl}>Send</a>
              </button>
            </Form> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
