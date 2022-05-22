import React from 'react';
import './App.css';
import './components/Signup'
import Signup from './components/Signup';
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <React.Fragment>
          <Signup></Signup>
        </React.Fragment>
      </BrowserRouter>
    </>
  );
}

export default App;
