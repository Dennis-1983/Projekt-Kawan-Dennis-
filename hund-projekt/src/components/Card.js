import React from 'react';

export const Card = (props) => {
  const { img, rasse, preis, ort } = props;

  return (
    <div className="card">
      {img}
      {rasse}
      {preis}
      {ort}
    </div>
  );
};
