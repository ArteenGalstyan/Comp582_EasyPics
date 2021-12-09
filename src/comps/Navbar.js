import React from 'react'
import { Outlet, Link } from 'react-router-dom'
export default class Navbar extends React.Component {

  render(){
  return (
      <>
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <span className="navbar-brand">EasyPics</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/photos">Photos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/albums">Albums</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Outlet />
</>
  )
}

}