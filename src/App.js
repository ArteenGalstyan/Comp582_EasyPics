import React from 'react';
import 'bootswatch/dist/minty/bootstrap.min.css';
import Navbar from './comps/Navbar';
import {Route,Routes} from "react-router-dom";
import Photos from './comps/Photos';
import Albums from './comps/Albums';
import Signin from './comps/Signin';

function App() {
  return (
    <div className="App">
     
      <Navbar />
      <div className="container">
      <Routes>
      <Route exact path="/" element={<Signin />}></Route>
      <Route path="/photos" element={<Photos />}></Route>
      <Route path="/albums" element={<Albums />}></Route>
      </Routes>
      </div>
    
    </div>
  );
}

export default App;