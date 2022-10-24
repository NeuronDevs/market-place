import React from 'react'
import '../styles/styles.css'

export const Header = () => {
  return (
    <nav className="p-3 navbar navbar-expand-lg navbar-dark background-p">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="./">Market place</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="./">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./">Seccion 1</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./">Seccion 2</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./">Seccion 3</a>
        </li>
      </ul>
      <ul className="navbar-nav ">
              <li className="nav-item ">
                <a href="/" className="btn m-3 selected">
                  Iniciar sesión
                </a>
              </li>
              <li className="nav-item">
                  <a href="/" className="btn selected m-3">
                    Registrarse
                  </a>
              </li>
          </ul>
    </div>
  </div>
</nav>
  )
}
