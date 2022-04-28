import React from 'react';import vid from '../videos/vid.webm'; 

export default function Main() {
  return (
    <div className="main">
      <video className="video" src={vid} autoPlay loop muted /> 
    </div>
  );
}
