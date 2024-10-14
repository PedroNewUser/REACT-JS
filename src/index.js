import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormUser from './components/FormUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App></App>}></Route>
        <Route path='/create-user' element={<FormUser></FormUser>}></Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);


reportWebVitals();
