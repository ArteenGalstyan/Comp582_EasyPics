import React from 'react';
import { motion } from 'framer-motion';
import DeleteForm from './DeleteForm';

const Modal = ({  selectedImg, setSelectedImg, selectedImgId, setSelectedImgId }) => {

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
      setSelectedImgId(null);
    }
  }

  return (
    <motion.div className="backdrop" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img src={selectedImg} alt="enlarged pic" 
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
      <DeleteForm selectedImgId={selectedImgId} setSelectedImg={setSelectedImg} setSelectedImgId={setSelectedImgId} />
    </motion.div>
  )
}

export default Modal;