import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import contactImg from '../assets/img/work-from-home-1.png';

const Contact = () => {
  const initialFormInfo = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  const [formInfo, setFormInfo] = useState(initialFormInfo);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (formInfoType, infoToUpdate) => {
    setFormInfo({ ...formInfo, [formInfoType]: infoToUpdate });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
  };

  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img src={contactImg} alt={`Let's connect!`} />
          </Col>
          <Col>
            <h2>Get in Touch</h2>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Form.Group as={Col} className='px-2'>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type='text'
                    name='firstName'
                    value={formInfo.firstName}
                    placeholder='First Name'
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group as={Col} className='px-2'>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type='text'
                    name='lastName'
                    value={formInfo.lastName}
                    placeholder='Last Name'
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} className='px-2'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='email'
                    name='email'
                    value={formInfo.email}
                    placeholder='Email'
                    onChange={(e) => onFormUpdate('email', e.target.value)}
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
                <p className={status.success === false ? 'danger' : 'success'}>
                  {status.message}
                </p>
              </Row>
              <Button type='submit'>{buttonText}</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
