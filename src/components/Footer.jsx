import React from 'react'
import '../styles/footer.css'

export const Footer = () => {
  return (
  <footer className="py-3 mt-4 footer bg-light">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="./" className="nav-link px-2 text-muted">Inicio</a></li>
      <li className="nav-item"><a href="./" className="nav-link px-2 text-muted">Seccion 1</a></li>
      <li className="nav-item"><a href="./" className="nav-link px-2 text-muted">Seccion 2</a></li>
      <li className="nav-item"><a href="./" className="nav-link px-2 text-muted">Seccion 3</a></li>
    </ul>
    
    <p className="text-center text-muted">© 2022 Neuron devs</p>
  </footer>
  )
}
