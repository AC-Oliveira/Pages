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
  console.log(pathname.includes('sites'));

  const { active } = useContext(GlobalContext);

  return (
    <Container className="content my-3">
      <Container className="d-flex justify-content-center">
        <a
          className={`text-center text-decoration-none py-0 my-0 prj ${pathname.includes('sites') && 'prj-selected'}`}
          href="/projects/sites"
        >
          Sites
        </a>
        <a
          className={`text-center text-decoration-none py-0 my-0  prj ${
            pathname.includes('repositories') && 'prj-selected'
          }`}
          href="/projects/repositories"
        >
          Repositórios
        </a>
      </Container>
      <Container className="d-flex flex-column align-items-center py-4 overflow-hidden">
        <h1 className="title">Projetos</h1>
        <Container>
          <Row className="d-flex justify-content-center m-0 p-0">
            <Col className="d-flex flex-column justify-content-center align-items-center p-0">
              <h4 className="mt-4">Pessoais</h4>
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
            <Col className={`${active && 'mt-4'} d-flex flex-column justify-content-center align-items-center p-0`}>
              <h4 className="mt-4">Freela</h4>
              <CardList items={myProjects.freela} cb={setFreelaIndex} cardType="freela" customIndex={freelaIndex} />
              <Container fluid className={`${active ? 'mt-1' : 'mt-5'} w-100 d-flex justify-content-center m-0`}>
                <CardControl cb={setFreelaIndex} index={freelaIndex} maxLen={myProjects.freela.length} />
              </Container>
            </Col>
          </Row>
        </Container>
        <h2 className="title mt-5">Trybe</h2>
        <Container>
          <Row className="d-flex justify-content-center m-0 p-0">
            <Col className="d-flex flex-column justify-content-center align-items-center p-0">
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
            <Col className="d-flex flex-column justify-content-center align-items-center p-0">
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
