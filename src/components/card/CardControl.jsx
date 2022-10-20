import { Button, Col, Row } from 'react-bootstrap';

export function CardControl({ cb, index, maxLen }) {
  console.log('render');
  const indexHandler = (type) => {
    console.log(type);
    if (type === 'next') {
      if (index === maxLen) {
        cb(1);
      } else {
        cb(index + 1);
      }
    } else if (type === 'prev') {
      if (index === 1) {
        cb(maxLen);
      } else {
        cb(index - 1);
      }
    }
  };

  return (
    <Row className="d-flex mx-0 px-0 bg-gray rounded">
      <Col className="px-0">
        <Button className="border-0 me-1 rounded-0 prev" onClick={() => indexHandler('prev')}>
          {'<'}
        </Button>
      </Col>
      <Col className="px-0">
        <Button className="border-0 rounded-0 next" onClick={() => indexHandler('next')}>
          {'>'}
        </Button>
      </Col>
    </Row>
  );
}
