import React from 'react';
import './App.css';
import NavBar from './Routes/NavBar';
import { BrowserRouter } from 'react-router-dom';



function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      

      </BrowserRouter>
    </div>
  );
}

export default App;
