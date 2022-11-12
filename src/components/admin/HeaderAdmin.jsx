import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/styles.css'


export const HeaderAdmin = () => {
  return (
    <nav className="p-3 navbar navbar-expand-lg navbar-dark background-p">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <NavLink className="navbar-brand" to="./">Market place</NavLink>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li key={1} className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="./">Inicio</NavLink>
            </li>
            <li key={2} className="nav-item">
              <NavLink className="nav-link" to="./ventas">Ventas</NavLink>
            </li>
            <li key={3} className="nav-item">
              <NavLink className="nav-link" to="./nuevo_producto">Nuevo producto</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
