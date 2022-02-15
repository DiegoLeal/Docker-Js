import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Welcome from './Welcome/Welcome';
import Secured from './Secured/Secured';
import NavBar from './NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>   
      <div className="container">    
        <NavBar />  
        <Route exact path="/" component={Welcome} />
        <Route path="/secured" component={Secured} />
      </div>
    </BrowserRouter>
  );
}

export default App;
