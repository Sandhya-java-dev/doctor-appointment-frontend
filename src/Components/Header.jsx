import React from 'react'
import { Link } from 'react-router'

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
         <Link className="navbar-brand" to="/">
  <i className="bi bi-calendar-check-fill"></i> AppointEase
</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
               <Link className="navbar-brand" to="#">Navbar</Link>
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              <Link className="nav-link" to="/list">appointment</Link>
              <Link className="nav-link" to="/schedule">schedule</Link>
              

              
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Header