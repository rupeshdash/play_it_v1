import React from 'react';
import './App.css';
import './components/Signup'
import Signup from './components/Signup';
import Login from "./components/Login";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <React.Fragment>
          {/* <Signup></Signup> */}
          <Login></Login>
        </React.Fragment>
      </BrowserRouter>
    </>
  );
}

export default App;
