import React, { useState } from 'react';
import Title from './Title';
import UploadForm from './UploadForm';
import ImageGrid from './ImageGrid';
import Modal from './Modal';

function Photos() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedImgId, setSelectedImgId] = useState(null);
  const collection = "images"

  return (
    <div className="photos">
      <Title/>
      <UploadForm collection={collection}/>
      <ImageGrid setSelectedImg={setSelectedImg} setSelectedImgId={setSelectedImgId} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} selectedImgId={selectedImgId} setSelectedImgId={setSelectedImgId} />
      )}
    </div>
  );
}
export default Photos;