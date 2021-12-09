import React from 'react';

export default function Signin() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Sign in</h2>
        <div className="form-group w-50">
        <div className="input-group mb-3">
        <input  type="text" className="form-control" placeholder="Email@address" aria-label="Album's Name" aria-describedby="button-addon2" />
        </div>
        <div className="input-group mb-3">
        <input  type="text" className="form-control" placeholder="Password" aria-label="Album's Name" aria-describedby="button-addon2" />
        <button className="btn btn-primary" type="button" id="button-addon2" >Submit</button>
        </div>
        </div>
      </main>
    );
  }