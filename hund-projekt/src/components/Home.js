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
    /* test  */
    <>
      {switchh ? (
        <div className="butInfo">
          <Form className="but-rassen">
            <Button variant="primary" onClick={() => setSwitchh(false)}>
              Kleine Rassen
            </Button>{' '}
            <Button variant="secondary"> mittlegroe Rassen</Button>{' '}
            <Button variant="success">Große Rassen</Button>{' '}
          </Form>
          <Form className="but-rassen">
            <Button variant="primary">Welpen futter</Button>{' '}
            <Button variant="secondary"> Adoult futter</Button>{' '}
            <Button variant="success">Senior futter</Button>{' '}
          </Form>
        </div>
      ) : (
        hundenCard
      )}
    </>
  );
};
