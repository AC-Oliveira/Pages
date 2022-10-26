import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import myRepositories from '../assets/repositories.json';
import { RepoCard } from '../components/repoCard';
import { GlobalContext } from '../context/GlobalContext';

export function ProjectsRepositories() {
  const { pathname } = useLocation();
  const { active } = useContext(GlobalContext);
  return (
    <Container className="content">
      <Container className="pt-3 mx-0 px-0 d-flex justify-content-center my-2">
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
      <Row className="mb-5">
        <h3 className={`text-center title ${active ? 'mt-5' : 'mt-4'}`}>Pessoal</h3>
        {myRepositories.pessoal.map((repo) => (
          <Col className="mt-3" lg={6}>
            <RepoCard
              repoName={repo.projectName}
              description={repo.description}
              link={repo.link}
              technologies={repo.technologies}
            />
          </Col>
        ))}
      </Row>
      <h3 className={`text-center title ${active ? 'mt-2' : 'mt-3'}`}>Trybe</h3>
      <Row>
        <h4 className="text-center mt-3">Javascript</h4>
        {myRepositories.trybe.javascript.map((repo) => (
          <Col className="mt-3" lg={6}>
            <RepoCard
              repoName={repo.projectName}
              description={repo.description}
              link={repo.link}
              technologies={repo.technologies}
            />
          </Col>
        ))}
      </Row>
      <Row className="mb-3">
        <h4 className="text-center mt-5">Back-end</h4>
        {myRepositories.trybe.backend.map((repo) => (
          <Col className="mt-3" lg={6}>
            <RepoCard
              repoName={repo.projectName}
              description={repo.description}
              link={repo.link}
              technologies={repo.technologies}
            />
          </Col>
        ))}
      </Row>
      <Row className="mb-3">
        <h4 className="text-center mt-5">Computer Science</h4>
        {myRepositories.trybe.computerScience.map((repo) => (
          <Col className="mt-3" lg={6}>
            <RepoCard
              repoName={repo.projectName}
              description={repo.description}
              link={repo.link}
              technologies={repo.technologies}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
