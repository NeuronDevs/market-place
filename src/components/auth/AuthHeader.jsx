import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/styles.css'

export const AuthHeader = () => {
  return (
    <nav className="p-3 navbar navbar-expand-lg navbar-dark background-p">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <NavLink className="navbar-brand" to="/login">Market place</NavLink>
          <ul className="navbar-nav ">
            <li key={5} className="nav-item ">
              <NavLink to="/login" className="btn m-3 selected">
                Iniciar sesión
              </NavLink>
            </li>
            <li key={6} className="nav-item">
              <NavLink to="/register" className="btn selected m-3">
                Registrarse
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
