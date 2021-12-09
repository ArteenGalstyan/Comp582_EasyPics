import React, {useState, useEffect} from 'react';
import 'bootswatch/dist/minty/bootstrap.min.css';
import Navbar from './comps/Navbar';
import {Route,Routes} from "react-router-dom";
import Photos from './comps/Photos';
import Albums from './comps/Albums';
import Signin from './comps/Signin';
import AlbumCard from './comps/AlbumCard';
import {projectFirestore} from './firebase/config';

function App() {
  
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const unmount = projectFirestore.collection("albums").onSnapshot((snapshot) => {
      const tempAlbums = [];
      snapshot.forEach((doc) => {
        tempAlbums.push({ ...doc.data(), id: doc.id });
      });
      setAlbums(tempAlbums);
    });
    return unmount;
  }, []);

  return (
    <div className="App">
     
      <Navbar />
      <div className="container">
      <Routes>
      <Route exact path="/" element={<Signin />}></Route>
      <Route path="/photos" element={<Photos />}></Route>
      <Route exact path="/albums" element={<Albums albums={albums}/>}/>
      <Route path="/:album" element={<AlbumCard />} />
      </Routes>
      </div>
    
    </div>
  );
}

export default App;