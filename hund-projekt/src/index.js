import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import App from './App';
import { InfoPage } from './components/InfoPage';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { ViewsFile } from './components/ViewsFile';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/infopage" element={<InfoPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/viewsFile" element={<ViewsFile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
