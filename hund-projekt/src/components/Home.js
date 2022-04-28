import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Home = () => {
  return <div className="butInfo">

<Form className="but-rassen">

<Button variant="primary">Kleine Rassen</Button>{' '}
  <Button variant="secondary"> mittlegroe Rassen</Button>{' '}
  <Button variant="success">Große Rassen</Button>{' '}
    
</Form>
<Form className="but-rassen">

<Button variant="primary">Welpen futter</Button>{' '}
  <Button variant="secondary"> Adoult futter</Button>{' '}
  <Button variant="success">Senior futter</Button>{' '}
    
</Form>




  </div>;
};
