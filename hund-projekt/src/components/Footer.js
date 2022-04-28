import React from 'react';

export const Footer = () => {
  return (
    <div className="fo-log">
      <div className="logo">
        <h1 className="news-footer">Dogo</h1>
        <p>SOLOGAN COMPANY </p>
      </div>

      <div>
        <label for="type">To contact: </label>{"  "}
        <input type="type" id="type" placeholder="Please Enter Your Email" />
      </div>
    </div>
  );
};
