/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import { useContext, useState } from 'react';
import { Accordion, Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import CustomCard from '../components/card';
import { GlobalContext } from '../context/GlobalContext';
import mygif from '../assets/mygif.gif';
import myProjects from '../assets/projects.json';

const customAccordion = (header, link, text) => (
  <Accordion flush className="w-100" style={{ maxWidth: '20rem' }}>
    <Accordion.Item eventKey="0">
      <Accordion.Header>
        <a href={link} target="_blank" rel="noreferrer">
          {header}
        </a>
      </Accordion.Header>
      <Accordion.Body>{text}</Accordion.Body>
    </Accordion.Item>
  </Accordion>
);

const customCarrousel = (items) => (
  <Carousel variant="dark" interval={2000} fade>
    {items.map((item, index) => (
      <Carousel.Item>
        <img className="d-block w-100" src={item.image || mygif} alt="First slide" />
        <Carousel.Caption>
          <h3>{item.header}</h3>
          {/* <p>{item.text}</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
);

export default function Projects() {
  // useEffect(() => {},[myProjects.pessoais]);
  const [pessoalIndex, setPessoalIndex] = useState(3);
  const [freelaIndex, setFreelaIndex] = useState(2);
  const [fundamentosIndex, setFundamentosIndex] = useState(5);
  const [frontendIndex, setFrontendIndex] = useState(9);

  const indexHandler = (cb, index, maxLength, type) => {
    if (type === 'next') {
      if (index === maxLength) {
        cb(1);
      } else {
        cb(index + 1);
      }
    } else if (type === 'prev') {
      if (index === 1) {
        cb(maxLength);
      } else {
        cb(index - 1);
      }
    }
  };

  const customCard = (items, cb, cardType = 'default', customIndex = 3) => {
    return (
      <Container className="p-0 customCards">
        {items.map((_item, index) => (
          <input
            checked={index + 1 === customIndex}
            type="radio"
            className="d-none"
            name={cardType}
            id={`s-${cardType}-${index + 1}`}
          />
        ))}
        <Container className="p-0 cardsTest">
          {items.map((item, index) => {
            return (
              <>
                {/*  eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor={`s-${cardType}-${index + 1}`} id={`l-${cardType}-${index + 1}`}>
                  <CustomCard
                    item={item}
                    cardType={`${cardType}-${index + 1}`}
                    middle={customIndex === index + 1}
                    onClick={() => cb(index + 1)}
                  />
                </label>
              </>
            );
          })}
        </Container>
      </Container>
    );
  };

  // eslint-disable-next-line react/no-unstable-nested-components, react/function-component-definition
  const CardContol = (...args) => {
    return (
      <Row className="d-flex mx-0 px-0 bg-gray rounded">
        <Col className="px-0">
          <Button className="border-0 me-1 rounded-0 prev" onClick={() => indexHandler(...args, 'prev')}>
            {'<'}
          </Button>
        </Col>
        <Col className="px-0">
          <Button className="border-0 rounded-0 next" onClick={() => indexHandler(...args, 'next')}>
            {'>'}
          </Button>
        </Col>
      </Row>
    );
  };

  const { active } = useContext(GlobalContext);
  return (
    <Container className="content d-flex flex-column align-items-center py-4 overflow-hidden">
      <h1 className="title">Projetos</h1>
      <Container>
        <Row className="d-flex justify-content-center m-0 p-0">
          <Col className="d-flex flex-column justify-content-center align-items-center p-0">
            <h4 className="mt-4">Pessoais</h4>
            {customCard(myProjects.pessoais, setPessoalIndex, 'pessoal', pessoalIndex)}
            <Container fluid className={`${active ? 'mt-1' : 'mt-5'} w-100 d-flex justify-content-center m-0`}>
              {CardContol(setPessoalIndex, pessoalIndex, myProjects.pessoais.length)}
            </Container>
          </Col>
          <Col className={`${active && 'mt-4'} d-flex flex-column justify-content-center align-items-center p-0`}>
            <h4 className="mt-4">Freela</h4>
            {customCard(myProjects.freela, setFreelaIndex, 'freela', freelaIndex)}
            <Container fluid className={`${active ? 'mt-1' : 'mt-5'} w-100 d-flex justify-content-center m-0`}>
              {CardContol(setFreelaIndex, freelaIndex, myProjects.freela.length)}
            </Container>
          </Col>
        </Row>
      </Container>
      <h2 className="title mt-5">Trybe</h2>
      <Container>
        <Row className="d-flex justify-content-center m-0 p-0">
          <Col className="d-flex flex-column justify-content-center align-items-center p-0">
            <h4 className="mt-2">Fundamentos</h4>
            {customCard(myProjects.fundamentos, setFundamentosIndex, 'fundamentos', fundamentosIndex)}
            <Container fluid className={`${active ? 'mt-1' : 'mt-5'} w-100 d-flex justify-content-center m-0`}>
              {CardContol(setFundamentosIndex, fundamentosIndex, myProjects.fundamentos.length)}
            </Container>
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center p-0">
            <h4 className="mt-2">Front-end</h4>
            {customCard(myProjects.frontEnd, setFrontendIndex, 'frontend', frontendIndex)}
            <Container fluid className={`${active ? 'mt-1' : 'mt-5'} w-100 d-flex justify-content-center m-0`}>
              {CardContol(setFrontendIndex, frontendIndex, myProjects.frontEnd.length)}
            </Container>
          </Col>
        </Row>
      </Container>

      {/* <Row className="mt-3">Javascript</Row> */}
      {/* Map with project Name Link and Text About */}
      {/* {customAccordion(testHeader, testLink, testText)} */}
      {/* <h4 className="mt-2">Front-end</h4> */}
      {/* {!active && customCard(myProjects.frontEnd)} */}
      {/* {active && customCarrousel(myProjects.fundamentos)} */}
      {/* <h4 className="mt-4">Back-end</h4> */}
      {/* {customAccordion(testHeader, testLink, testText)} */}
      {/* <h4 className="mt-4">Computer Science</h4> */}
      {/* {customAccordion(testHeader, testLink, testText)} */}
    </Container>
  );
}
