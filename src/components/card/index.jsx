import { Button, Card } from 'react-bootstrap';

export default function CustomCard({ onClick, middle, cardType, item: { header, text, link, image } }) {
  return (
    // @ts-ignore
    <Card onClick={onClick} bg="dark" id={cardType} className={`${middle ? 'mainCard' : ''}`}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="title">{header}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button disabled={link === 'privado'} variant="primary">
          <a className="text-decoration-none" href={link} target="_blank" rel="noreferrer">
            {link === 'privado' ? 'Privado' : 'Ver Projeto'}
          </a>
        </Button>
      </Card.Body>
    </Card>
  );
}
