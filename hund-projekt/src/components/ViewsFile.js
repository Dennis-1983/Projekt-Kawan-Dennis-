import React from 'react';
import { useState } from 'react';

export const ViewsFile = () => {
  const [data, setdata] = useState([]);
  const hunde = data.map((data, index) => {
    data;
  });
  return (
    <div className="data">
      return(
      <ul>{data.map(hunde)}</ul>)
    </div>
  );
};
