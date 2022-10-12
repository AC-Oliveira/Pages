/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiOutlineGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import { GlobalContext } from '../../context/GlobalContext';

export default function Header() {
  const { active } = useContext(GlobalContext);
  const [expanded, setExpanded] = useState(false);

  const customToggle = (
    <Container
      onClick={() => setExpanded((current) => !current)}
      className={`${styles['menu-btn']} ${expanded && styles.open} mx-0`}
    >
      <div className={`${styles['menu-btn__burger']} `} />
    </Container>
  );

  const socilNetwork = (
    <Container className={window.innerWidth > 767 && !isMobile ? 'justify-content-end' : 'justify-content-center mt-1'}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={`${styles.github} mx-3`} href="https://github.com/AC-Oliveira" target="_blank" rel="noreferrer">
        <AiOutlineGithub size={30} />
      </a>
      <a
        className={`${styles.linkedin} mx-3`}
        href="https://www.linkedin.com/in/ac-oliveira-d2/"
        target="_blank"
        rel="noreferrer"
      >
        <RiLinkedinFill size={30} />
      </a>
    </Container>
  );

  return (
    <Navbar className="p-0" expand="md" expanded={expanded}>
      <Container className={styles.mainContainer}>
        <Container className={active ? 'mx-0' : ''}>
          <Navbar.Brand href="#home" className={`${styles.logo} me-3 font-weight-bold`}>
            Allan Oliveira
          </Navbar.Brand>
        </Container>
        {active && customToggle}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 flex justify-content-center">
            <Nav.Link className={`${!active && styles['underline-hover-effect']} ${styles.taCenter} font-weight-bold`}>
              <Link to="/" className="text-decoration-none">
                Sobre mim
              </Link>
            </Nav.Link>
            <Nav.Link className={`${!active && styles['underline-hover-effect']} ${styles.taCenter} font-weight-bold`}>
              <Link to="/projects" className="text-decoration-none">
                Projetos
              </Link>
            </Nav.Link>
            <Nav.Link className={`${!active && styles['underline-hover-effect']} ${styles.taCenter} font-weight-bold`}>
              <Link to="/contact" className="text-decoration-none">
                Fale Comigo
              </Link>
            </Nav.Link>
            <Nav.Link className={`${!active && styles['underline-hover-effect']} ${styles.taCenter} font-weight-bold`}>
              <a
                onClick={() => {
                  window.open('../public/projects/fundamentos/1lessonslearned/index.html');
                }}
                href="#"
                className="text-decoration-none"
              >
                Currículo
              </a>
            </Nav.Link>
            <Nav.Link className={`${!active && styles['underline-hover-effect']} ${styles.taCenter} font-weight-bold`}>
              <Link to="/knowledge" className="text-decoration-none">
                Conhecimentos
              </Link>
            </Nav.Link>
            {window.innerWidth <= 767 && active && socilNetwork}
          </Nav>
        </Navbar.Collapse>
        {window.innerWidth > 767 && !active && socilNetwork}
      </Container>
    </Navbar>
  );
}
