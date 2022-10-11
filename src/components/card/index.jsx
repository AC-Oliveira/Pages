import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import mygif from '../../assets/mygif.gif';

export default function CustomCard({ header, text, buttonText, link, image }) {
  return (
    <Card bg="dark" style={{ width: '15rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>
          <a href={link}>{header}</a>
        </Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">{buttonText}</Button>
      </Card.Body>
    </Card>
  );
}
