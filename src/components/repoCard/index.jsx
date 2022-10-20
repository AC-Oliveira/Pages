import { Button, Container } from 'react-bootstrap';
import {
  SiDocker,
  SiEslint,
  SiExpress,
  SiGooglechrome,
  SiHeroku,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPytest,
  SiPython,
  SiReact,
  SiSelenium,
  SiSequelize,
  SiSocketdotio,
} from 'react-icons/si';
import '../../App.scss';

export function RepoCard({ repoName, description, link, technologies }) {
  return (
    <Container className="bg-dark rounded p-3 repocard">
      <h4 className="title">{`AC-Oliveira/${repoName}`}</h4>
      <p>{description}</p>
      <Container className="d-flex justify-content-between w-100">
        <Button className="text-nowrap">
          <a className="text-decoration-none" href={link === 'privado' ? '#' : link}>
            Ver Repositório
          </a>
        </Button>
        <Container style={{ gap: '10px' }} className="d-flex justify-content-end align-items-center flex-wrap">
          {technologies.includes('Chrome') && <SiGooglechrome size={27} fill="#f0f0f0" />}
          {technologies.includes('Python') && <SiPython size={27} fill="#f7ce43" />}
          {technologies.includes('Selenium') && <SiSelenium size={27} fill="#00ae00" />}
          {technologies.includes('NodeJS') && <SiNodedotjs size={27} fill="#6da35f" />}
          {technologies.includes('Express') && <SiExpress size={27} fill="#8bbf3d" />}
          {technologies.includes('JavaScript') && <SiJavascript size={27} fill="#efd81d" />}
          {technologies.includes('ESLint') && <SiEslint size={27} fill="#4930bd" />}
          {technologies.includes('Jest') && <SiJest size={27} fill="#b8360f" />}
          {technologies.includes('MySQL') && <SiMysql size={27} fill="#dd8a00" />}
          {technologies.includes('Sequelize') && <SiSequelize size={27} fill="#52b0e7" />}
          {technologies.includes('React') && <SiReact size={27} fill="#5ed3f3" />}
          {technologies.includes('MongoDB') && <SiMongodb size={27} fill="#4ca449" />}
          {technologies.includes('Docker') && <SiDocker size={27} fill="#2392e6" />}
          {technologies.includes('Herorku') && <SiHeroku size={27} fill="#541fac" />}
          {technologies.includes('SocketIO') && <SiSocketdotio size={27} fill="#ffffff" />}
          {technologies.includes('Pytest') && <SiPytest size={27} fill="#009ccd" />}
        </Container>
      </Container>
    </Container>
  );
}
