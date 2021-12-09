import React, { useState } from 'react';
import { NewAlbumForm } from './NewAlbumForm';
import { Link } from 'react-router-dom';
import { projectFirestore } from '../firebase/config';

export default function Albums({albums}) {

    return (
      <main>
        <div className="title" style={{ padding: "1rem 0" }}>
            <h2>Your Albums</h2>
        </div>
        <NewAlbumForm />
        <section>
        {albums.map((album) => (
        <>
        <div class="card border-secondary mb-3" style={{maxWidth: 250}}>
            <h3 class="card-header">{album.name}</h3>
                <div class="card-body">
                <Link to={`/${album.id}`}>
                    <aside key={album.name}>
                    <img src={album.images ? album.images[0].url : ""} alt="album" />
                    </aside>
                </Link>
                <button type="button" class="btn btn-outline-secondary" >Delete</button>
                </div>
        </div>
        </>
        ))}
      </section>
      </main>
    );

  }