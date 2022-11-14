import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/styles.css'
import  Axios  from 'axios';
import Swal from 'sweetalert2'

export const HeaderAdmin = () => {

  const logout = () =>{
    const options = {
      method: 'GET',
      url: 'http://localhost:4000/api/logout',
      withCredentials: true
  };
  
  Axios.request(options).then(function (response) {
      console.log(response);
      if(response.data.success){
        window.location.replace('/home');
      }
  }).catch(function (error) {
      Swal.fire(
          'Error!',
          "Error no se ha podido cerrar sesión",
          'error'
        )
  });


  }

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
              <NavLink className="nav-link" to="./nuevo_producto">Productos</NavLink>
            </li>
          </ul>

          <ul className="navbar-nav ">
            <li key={6} className="nav-item">
              <button onClick={logout} className="btn selected m-3">
                Cerrar sesión
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
