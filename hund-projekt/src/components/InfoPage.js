import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';


export const InfoPage = () => {
  const [dogs, setDogs] = useState([]);
 /*  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get("");
        setDogs(response.data);
      } catch (error) {}
    };
    loadData();
  }, []); */

  return (
    <div>
          
      <p className="about-info">
      About Us:<br/>
        Bei uns finden sie ihren passenden Begleiter fürs Leben. Wir stehen
        ihnen jederzeit bei Fragen zur Verfügung.
      </p>

      {/* <ul>
        {dogs.map((dog) => {
          return <li>{dog.name}</li>;
        })}
      </ul> */}
    </div>
  );
};
