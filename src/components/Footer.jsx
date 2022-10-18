import React from 'react'
import '../styles/footer.css'

export const Footer = () => {
  return (
  <footer class="py-3 mt-4 footer bg-light">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="./" class="nav-link px-2 text-muted">Inicio</a></li>
      <li class="nav-item"><a href="./" class="nav-link px-2 text-muted">Seccion 1</a></li>
      <li class="nav-item"><a href="./" class="nav-link px-2 text-muted">Seccion 2</a></li>
      <li class="nav-item"><a href="./" class="nav-link px-2 text-muted">Seccion 3</a></li>
    </ul>
    
    <p class="text-center text-muted">© 2022 Neuron devs</p>
  </footer>
  )
}
