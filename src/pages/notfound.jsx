import { Container } from 'react-bootstrap';

export default function Notfound() {
  return (
    <Container className="content d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center">404</h1>
      <h2 className="text-center">Página não encontrada</h2>
    </Container>
  );
}
