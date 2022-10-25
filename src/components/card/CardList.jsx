/* eslint-disable react/destructuring-assignment */
import { Container } from 'react-bootstrap';
import { CustomCard } from '.';

export function CardList({ items, cb, cardType = 'default', customIndex = 3 }) {
  return (
    <Container className="p-0 customCards">
      {items.map((_item, index) => (
        <input
          checked={index + 1 === customIndex}
          type="radio"
          className="d-none"
          name={cardType}
          id={`s-${cardType}-${index + 1}`}
        />
      ))}
      <Container className="p-0 cardLabel">
        {items.map((item, index) => {
          return (
            <>
              {/*  eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor={`s-${cardType}-${index + 1}`} id={`l-${cardType}-${index + 1}`}>
                <CustomCard
                  item={item}
                  cardType={`${cardType}-${index + 1}`}
                  middle={customIndex === index + 1}
                  onClick={() => cb(index + 1)}
                />
              </label>
            </>
          );
        })}
      </Container>
    </Container>
  );
}
