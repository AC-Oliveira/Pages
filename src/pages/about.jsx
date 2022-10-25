import { useContext } from 'react';
import { Container, Image } from 'react-bootstrap';
import myself from '../assets/eu.jpeg';
import { GlobalContext } from '../context/GlobalContext';

export function About() {
  const { active } = useContext(GlobalContext);
  return (
    <Container className="content d-flex align-items-center justify-content-center">
      <Container
        className={`bg-dark rounded d-flex ${!active && 'p-4'} ${
          active && 'flex-column mx-auto my-2 py-4 px-1'
        } justify-content-center align-items-center`}
      >
        <Container>
          <Image style={{ borderRadius: '50px' }} src={myself} fluid />
        </Container>
        <Container className={active && 'mt-4'}>
          {/* <h1 className="title">Sobre mim</h1> */}
          <h1 className="title">Sobre mim</h1>
          <p>
            Me chamo Allan Oliveira, residente de São Gonçalo - RJ, atualmente estou migrando do curso de Engenharia
            Elétrica para Ciências da Computação na UERJ. Em 2022 terminei o curso de Desenvolvimento Web da Trybe, um
            curso com mais de 1500 horas de formação que aborda conteúdos relacionados a fundamentos de desenvolvimento
            web, desenvolvimento Front-end, desenvolvimento Back-end, ciência da computação, engenharia de software,
            metodologias ágeis e habilidades comportamentais Atualmente trabalho na área de Desenvolvimento Web como
            Freelancer e estou buscando oportunidades no mercado como desenvolvedor de software.
          </p>
        </Container>
      </Container>
    </Container>
  );
}
