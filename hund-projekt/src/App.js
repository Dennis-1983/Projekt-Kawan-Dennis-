import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';
import './App.scss';
import { Container } from 'react-bootstrap';
import Main from './components/Main';
import { Outlet } from 'react-router-dom';
import { Home } from './components/Home';
import { InfoPage } from './components/InfoPage';
import { Link } from './components/Link';

function App() {
  return (
    <div className="homePage">
      <Link />
      <Main />

      <div className="container">
        <h1 className="dogo">Dogo Kleinanzeigen </h1>
        <p className="dogo-portal">
          Dogo das Portal für ihr neues Familienmitglied
        </p>

        <Home />
        <InfoPage />
      </div>
    </div>
  );
}

export default App;
