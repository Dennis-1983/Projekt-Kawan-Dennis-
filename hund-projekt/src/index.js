import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { InfoPage } from './components/InfoPage';
import { Home } from './components/Home';
import {Link} from './components/Link';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
   
      <Routes>
  
        <Route path="/" element={<App />}>
         <Route path="/infopage" element={<InfoPage />} />
          <Route path="/link" element={<Link />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
