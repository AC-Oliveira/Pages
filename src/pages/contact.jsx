import { Button, Col, Container, Form, Row, ToastContainer, Toast } from 'react-bootstrap';
import { GoMail } from 'react-icons/go';
import { SiWhatsapp } from 'react-icons/si';
import { MdSmartphone } from 'react-icons/md';
import { useState } from 'react';
import sendMail from '../assets/sendMail';
import { Loading } from '../components/loading';

export function Contact() {
  const messageToEnconde = encodeURI('Olá, gostaria de saber mais sobre o seu trabalho!');
  const link = `https://wa.me/5521982034418?text=${messageToEnconde}`;
  const defaulUser = {
    name: '',
    email: '',
    message: '',
  };
  const [userInfo, setUserInfo] = useState(defaulUser);
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');

  const onChange = (field, info) => {
    setUserInfo({ ...userInfo, [field]: info });
  };

  const regexEmail = /.*@.*.\.com/;
  const validateForm = () => {
    if (userInfo.name === '' || userInfo.email === '' || userInfo.message === '') {
      return false;
    }
    if (!regexEmail.test(userInfo.email)) {
      return false;
    }
    return true;
  };

  return (
    <Container className="content d-flex justify-content-center align-items-center">
      <Row>
        <Col lg={6}>
          <h3 className="title">Fale Comigo!</h3>
          <p className="primary">
            <span className="me-2">
              <GoMail className="primary" />
            </span>
            allancardoso21@gmail.com
          </p>
          <p className="primary">
            <span className="me-2">
              <MdSmartphone className="primary" />
            </span>
            (21) 98203-4418
          </p>
          <a href={link} className="text-decoration-none" target="_blank" rel="noreferrer">
            <Button className="d-flex m-0 p-3 justify-content-center align-items-center whatsapp">
              <SiWhatsapp fill="#fff" size={27} />
              <p className="mb-0 ms-2 text-white fs-7">Conversar no Whatsapp</p>
            </Button>
          </a>
        </Col>
        <Col lg={6}>
          <h3 className="title">Me envie um email:</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                className="text-dark"
                placeholder="Digite seu nome"
                onChange={({ target }) => onChange('name', target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                className="text-dark"
                placeholder="Digite seu email"
                onChange={({ target }) => onChange('email', target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mensagem</Form.Label>
              <Form.Control
                as="textarea"
                className="text-dark"
                rows={3}
                placeholder="Digite sua mensagem"
                onChange={({ target }) => onChange('message', target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="button"
              disabled={Object.values(userInfo).some((info) => info === '')}
              // disabled={!regexEmail.test(userInfo.email)}
              onClick={async () => {
                setLoading(true);
                console.log('aqui');
                try {
                  if (!regexEmail.test(userInfo.email)) throw new Error('Email inválido');
                  await sendMail.sendMeMail(userInfo);
                  await sendMail.sendUserMail(userInfo);
                  await new Promise(() => {
                    setTimeout(() => setLoading(false), 1000);
                  });
                } catch (error) {
                  setLoading(false);
                  setShowMessage(true);
                  setMessage(error.message);
                }
              }}
            >
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
      {loading && <Loading />}
      <ToastContainer position="top-center">
        <Toast
          autohide
          show={showMessage}
          className="mt-5"
          delay={5000}
          bg="dark"
          onClose={() => setShowMessage(false)}
        >
          <Toast.Header className="d-flex flex-column align-items-start px-0 bg-dark" closeButton={false}>
            <strong className="ms-3 title">Error</strong>
            <div className="loading-underline" />
          </Toast.Header>
          <Toast.Body className="text-center pt-0">{message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
}
