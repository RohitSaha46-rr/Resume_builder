import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Resume from './Resume';
import Personal_details from './Personal_details';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="/personal_details" element={<Personal_details/>}></Route>
      <Route path='/education' element={<Education/>}></Route>
      <Route path='/skills' element={<Skills/>}></Route>
      <Route path='/experience' element={<Experience/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/resume' element={<Resume/>}></Route>
    </Routes>
  </BrowserRouter>
);


