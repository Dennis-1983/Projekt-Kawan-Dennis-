import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Card } from './Card';
import hundDb from '../data/db';

export const Home = () => {
  const data = JSON.parse(hundDb);

  const [switchh, setSwitchh] = useState(true);
  const hundenCard = data.map((hund) => {
    return (
      <Card
        img={hund.img}
        rasse={hund.rasse}
        preis={hund.preis}
        ort={hund.ort}
      />
    );
  });
  return (
    <>
      {switchh ? (
        <div className="butInfo">
          <Form className="but-rassen">
            <Button variant="primary" onClick={() => setSwitchh(false)}>
              Kleine Rassen
            </Button>{' '}
            <Button variant="secondary" onClick={() => setSwitchh(false)}>
              {' '}
              mittlegroe Rassen
            </Button>{' '}
            <Button variant="success" onClick={() => setSwitchh(false)}>
              Große Rassen
            </Button>{' '}
          </Form>
        </div>
      ) : (
        hundenCard
      )}
      <Form className="but-rassen">
        <a
          href="https://www.wolfsblut.com/suche?searchPhrase=Welpen%20futter"
          target="_blanck"
        >
          <Button variant="primary">Welpen futter</Button>{' '}
        </a>
        <a href="https://www.wolfsblut.com/adultfutter.html" target="_blanck">
          <Button variant="secondary"> Adoult futter</Button>{' '}
        </a>
        <a href="https://www.wolfsblut.com/seniorfutter.html" target="_blanck">
          <Button variant="success">Senior futter</Button>{' '}
        </a>
      </Form>
    </>
  );
};
