import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { NewAlbumForm } from './NewAlbumForm';
import { motion } from 'framer-motion';

export default function Albums() {
    const { docs } = useFirestore('albums');

    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Your Albums</h2>
        <NewAlbumForm />
        {docs && docs.map(doc => (
        <motion.div className="img-wrap" key={doc.name} 
          layout
          whileHover={{ opacity: 1 }}s
        >
        </motion.div>
        ))}
      </main>
    );

  }