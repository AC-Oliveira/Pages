import { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import { CardList } from '../components/card/CardList';
import { CardControl } from '../components/card/CardControl';
import myProjects from '../assets/sites.json';

export function ProjectsSites() {
  const [pessoalIndex, setPessoalIndex] = useState(3);
  const [freelaIndex, setFreelaIndex] = useState(2);
  const [fundamentosIndex, setFundamentosIndex] = useState(5);
  const [frontendIndex, setFrontendIndex] = useState(9);
  const { pathname } = useLocation();

  const { active } = useContext(GlobalContext);

  return (
    <Container className={`${active && 'mt-4'} content`}>
      <Container className="d-flex justify-content-center mt-2">
        <a
          className={`text-center text-decoration-none py-0 my-0 prj ${pathname.includes('sites') && 'prj-selected'}`}
          href="#/sites"
        >
          Sites
        </a>
        <a
          className={`text-center text-decoration-none py-0 my-0  prj ${
            pathname.includes('repositories') && 'prj-selected'
          }`}
          href="#/repositories"
        >
          Repositórios
        </a>
      </Container>
      <Container className="d-flex flex-column align-items-center pt-4">
        <h1 className={`title ${active && 'mt-3'}`}>Projetos</h1>
        <Container>
          <Row className="d-flex justify-content-center m-0 p-0">
            <Col lg={6} className="mb-3 d-flex flex-column justify-content-center align-items-center p-0">
              <h4 className="mt-2">Pessoais</h4>
              <CardList
                items={myProjects.pessoais}
                cb={setPessoalIndex}
                cardType="pessoal"
                customIndex={pessoalIndex}
              />
              <Container fluid className={`${active ? 'mt-1' : 'mt-5'} w-100 d-flex justify-content-center m-0`}>
                <CardControl cb={setPessoalIndex} index={pessoalIndex} maxLen={myProjects.pessoais.length} />
              </Container>
            </Col>
            <Col
              lg={6}
              className={`${active && 'mt-4'} mb-3 d-flex flex-column justify-content-center align-items-center p-0`}
            >
              <h4 className="mt-2">Freela</h4>
              <CardList items={myProjects.freela} cb={setFreelaIndex} cardType="freela" customIndex={freelaIndex} />
              <Container fluid className={`${active ? 'mt-1' : 'mt-5'} w-100 d-flex justify-content-center m-0`}>
                <CardControl cb={setFreelaIndex} index={freelaIndex} maxLen={myProjects.freela.length} />
              </Container>
            </Col>
          </Row>
        </Container>
        <h2 className={`${active ? 'mt-4' : 'mt-2'} title`}>Trybe</h2>
        <Container>
          <Row className="d-flex justify-content-center m-0 p-0">
            <Col
              xxl={6}
              className={`${active && 'mt-4'} mb-3 d-flex flex-column justify-content-center align-items-center p-0`}
            >
              <h4 className="mt-2">Fundamentos</h4>
              <CardList
                items={myProjects.fundamentos}
                cb={setFundamentosIndex}
                cardType="fundamentos"
                customIndex={fundamentosIndex}
              />
              <Container fluid className={`${active ? 'mt-1' : 'mt-5'} w-100 d-flex justify-content-center m-0`}>
                <CardControl cb={setFundamentosIndex} index={fundamentosIndex} maxLen={myProjects.fundamentos.length} />
              </Container>
            </Col>
            <Col
              xxl={6}
              className={`${active && 'mt-4'} mb-3 d-flex flex-column justify-content-center align-items-center p-0`}
            >
              <h4 className="mt-2">Front-end</h4>
              <CardList
                items={myProjects.frontEnd}
                cb={setFrontendIndex}
                cardType="frontend"
                customIndex={frontendIndex}
              />
              <Container fluid className={`${active ? 'mt-1' : 'mt-5'} w-100 d-flex justify-content-center m-0`}>
                <CardControl cb={setFrontendIndex} index={frontendIndex} maxLen={myProjects.frontEnd.length} />
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}
