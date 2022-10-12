// @ts-ignore
import { useContext } from 'react';
import { Accordion, Carousel, Container, Row } from 'react-bootstrap';
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

// @ts-ignore
const customCard = (item) => (
  <Container className="d-flex justify-content-center mt-2 customCards">
    {item.map(({ header, text, buttonText, link, image = mygif }) => (
      <CustomCard header={header} text={text} buttonText={buttonText} link={link} image={image} />
    ))}
  </Container>
);

const customCarrousel = (items) => (
  <Carousel variant="dark" interval={2000} fade>
    {items.map((item) => (
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

const testHeader = 'Unit Testing';
const testLink = 'localhost:3000';
const testText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default function Projects() {
  const { active } = useContext(GlobalContext);
  return (
    <Container className="content border border-danger d-flex flex-column align-items-center py-4">
      <h1 className="title">Projetos</h1>
      <h4 className="mt-4">Pessoais</h4>
      {active && customCarrousel(myProjects.pessoais)}
      {!active && customCard(myProjects.pessoais)}
      <h4 className="mt-4">Freela</h4>
      {active && customCarrousel(myProjects.freela)}
      {!active && customCard(myProjects.freela)}
      <h2 className="title mt-5">Trybe</h2>
      <h4 className="mt-2">Fundamentos</h4>
      <Row>HTML-CSS-JS</Row>
      <Row>
        {active && customCarrousel(myProjects.fundamentos)}
        {!active && customCard(myProjects.fundamentos)}
      </Row>
      <Row className="mt-3">Javascript</Row>
      {/* Map with project Name Link and Text About */}
      {customAccordion(testHeader, testLink, testText)}
      <h4 className="mt-2">Front-end</h4>
      {active && customCarrousel(myProjects.fundamentos)}
      {!active && customCard(myProjects.frontEnd)}
      <h4 className="mt-4">Back-end</h4>
      {customAccordion(testHeader, testLink, testText)}
      <h4 className="mt-4">Computer Science</h4>
      {customAccordion(testHeader, testLink, testText)}
    </Container>
  );
}
