import React from 'react';
import 'firebase/firestore';
import { projectFirestore } from '../firebase/config';

const DeleteForm = ({selectedImgId, setSelectedImg, setSelectedImgId}) => {
  var docRef = projectFirestore.collection('images');
  const handleChange = () => {
    docRef.doc(selectedImgId).delete().then(() => {
      console.log("Document successfully deleted.");
    }).catch((error) => {
      console.log("Error removing document: ", error);
    });
    setSelectedImg(null);
    setSelectedImgId(null);
  }

  return (
    <form>
      <label>
        <span onClick={handleChange}>-</span>
      </label>
    </form>
  );
}

export default DeleteForm;