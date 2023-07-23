import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Videos from './Videos';
import UploadVideos from './UploadVideos';
import Login from './Login';
import SignUp from './SignUp';

import './App.css';
const App = () => {
  return (
   
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/videos' element={<Videos/>} />
        <Route path='/upload' element={<UploadVideos/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
      <Footer/>
    </Router>
   

  );
};

export default App;
