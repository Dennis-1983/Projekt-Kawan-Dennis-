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
import { Title } from './components/Title';
import data from './data/db.js';
import Card from './components/Card'

function App() {
  console.log(data)
  return (
    <div className="homePage">
      <Link />
      <Main />
      <div className="container">
        <Title />
        <Outlet />
     
      </div>
    </div>
  );
}

export default App;
