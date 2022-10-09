import { Container, Image } from 'react-bootstrap';
import myself from '../assets/eu.jpg';

export default function About() {
  return (
    <Container className="mt-4 d-flex">
      <Container>
        <Image src={myself} rounded fluid />
        <h1>teste</h1>
      </Container>
      <Container>
        <h1>Sobre mim</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
          repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
          praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure
          eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit
          sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint?
          Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem!
          Officiis iure rerum voluptates a cumque velit{' '}
        </p>
      </Container>
    </Container>
  );
}