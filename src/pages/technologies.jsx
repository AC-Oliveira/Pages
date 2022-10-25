import { Card, Col, Container, Row } from 'react-bootstrap';
import { RiCss3Fill, RiHtml5Fill, RiReactjsFill } from 'react-icons/ri';
import { DiJavascript } from 'react-icons/di';
import {
  SiBootstrap,
  SiChakraui,
  SiDocker,
  SiEslint,
  SiExpress,
  SiGit,
  SiHeroku,
  SiIonic,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPytest,
  SiPython,
  SiRedux,
  SiSelenium,
  SiSequelize,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import technologies from '../assets/technologies.json';

export function Technologies() {
  const technologiesLogos = {
    HTML5: <RiHtml5Fill fill="#e96226" size={150} />,
    CSS3: <RiCss3Fill fill="#264de9" size={150} />,
    JavaScript: <DiJavascript fill="#efd81d" size={150} />,
    ESLint: <SiEslint fill="#4b32c3" size={150} />,
    Jest: <SiJest fill="#c21325" size={150} />,
    React: <RiReactjsFill fill="#61dafb" size={150} />,
    Redux: <SiRedux fill="#7248b6" size={150} />,
    'Context API': <RiReactjsFill fill="#29629b" size={150} />,
    MySQL: <SiMysql fill="#dd8a00" size={150} />,
    'Node.js': <SiNodedotjs fill="#6fa560" size={150} />,
    MongoDB: <SiMongodb fill="#429643" size={150} />,
    Docker: <SiDocker fill="#2392e6" size={150} />,
    Express: <SiExpress fill="#87be4d" size={150} />,
    Sequelize: <SiSequelize fill="#52b0e7" size={150} />,
    Heroku: <SiHeroku size={150} fill="#541fac" />,
    Git: <SiGit fill="#f05032" size={150} />,
    'Socket.IO': <SiSocketdotio size={150} fill="#ffffff" />,
    Pytest: <SiPytest size={150} fill="#009ccd" />,
    Python: <SiPython size={150} fill="#f7ce43" />,
    Selenium: <SiSelenium size={150} fill="#00ae00" />,
    Ionic: <SiIonic size={150} fill="#3880ff" />,
    'Next.js': <SiNextdotjs size={150} fill="#fff" />,
    Bootstrap: <SiBootstrap size={150} fill="#7952b3" />,
    ChakraUI: <SiChakraui size={150} fill="#319795" />,
    'Tailwind CSS': <SiTailwindcss size={150} fill="#38b2ac" />,
    Typescript: <SiTypescript size={150} fill="#3178c6" />,
  };
  return (
    <Container className="content">
      <h1 className="text-center mt-3 title px-5">Tecnologias</h1>
      <Row className="mt-4 overflow-hidden">
        {technologies.map(({ name, text }, index) => (
          <Col className="technologyContainer my-3  d-flex justify-content-center align-items-center">
            <Card style={{ maxWidth: '300px' }} bg="dark" className={technologies.length / 2 < index ? 'up' : 'down'}>
              <Card.Img as="div" variant="top" className="d-flex justify-content-center">
                {name === 'Socket.IO' ? (
                  <Container style={{ width: '150px' }} className="m-0 p-0 rounded-circle bg-dark">
                    {technologiesLogos[name]}
                  </Container>
                ) : (
                  technologiesLogos[name]
                )}
              </Card.Img>
              <Card.Body>
                <Card.Title className="title">{name}</Card.Title>
                <Card.Text>{text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
