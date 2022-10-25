import { useContext } from 'react';
import { Container, Image } from 'react-bootstrap';
// import myself from '../assets/eu.jpg';
import meme from '../assets/mem.jpg';
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
          <Image style={{ borderRadius: '50px' }} src={meme} fluid />
        </Container>
        <Container className={active && 'mt-4'}>
          {/* <h1 className="title">Sobre mim</h1> */}
          <h1 className="title">Em construção</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
            repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto
            fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur
            iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit
            sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo
            neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi
            expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima
            nesciunt dolorem! Officiis iure rerum voluptates a cumque velit{' '}
          </p>
        </Container>
      </Container>
    </Container>
  );
}
