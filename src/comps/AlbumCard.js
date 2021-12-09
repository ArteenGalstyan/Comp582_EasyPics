import React, { useState, useEffect } from "react";
import { Link, useMatch } from "react-router-dom";
import { NewPhoto } from "./NewPhoto";
import { projectFirestore } from "../firebase/config";
import UploadForm from "./UploadForm";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";

export default function AlbumCard()  {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedImgId, setSelectedImgId] = useState(null);
  const [images, setImages] = useState([]);
  const [albumName, setAlbumName] = useState("");
  const collection = "images";

  const match = useMatch("/:album");
  const { album } = match.params;

  useEffect(() => {
    const unmount = projectFirestore.collection("albums")
      .doc(album)
      .onSnapshot((doc) => {
        setImages(doc.data().images || []);
        setAlbumName(doc.data().name);
      });
      return unmount
  }, []);

  return (
    <div className="title">
      <h2>{albumName}</h2>
      <UploadForm collection={collection} />
      <ImageGrid setSelectedImg={setSelectedImg} setSelectedImgId={setSelectedImgId} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} selectedImgId={selectedImgId} setSelectedImgId={setSelectedImgId} />
      )}
    </div>
  );
};