import { Nav } from 'react-bootstrap';

export default function Footer() {
  return (
    <Nav fill className="w-100" style={{ backgroundColor: 'var(--gray-blue)' }}>
      <Nav.Item>©2022 por Allan Oliveira. Todos os direitos reservados.</Nav.Item>
    </Nav>
  );
}
