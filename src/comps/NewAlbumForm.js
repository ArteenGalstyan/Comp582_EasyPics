import React, { useState } from "react";
import { projectFirestore } from '../firebase/config';

export const NewAlbumForm = () => {
  const [albumName, setAlbumName] = useState("");

  const onAlbumNameChange = (e) => {
    setAlbumName(e.target.value);
  };

  const onAlbumCreate = () => {
    if (!albumName) {
      return;
    }
    projectFirestore.collection("albums").doc(albumName).set({
      name: albumName,
    });
    setAlbumName("");
  };

  return (
    <>
    <div className="form-group w-50">
        <div className="input-group mb-3">
        <input value={albumName} onChange={onAlbumNameChange} type="text" className="form-control" placeholder="Album Name" aria-label="Album's Name" aria-describedby="button-addon2" />
        <button className="btn btn-primary" type="button" id="button-addon2" onClick={onAlbumCreate}>Create Album</button>
        </div>
    </div>
    </>
  );
};