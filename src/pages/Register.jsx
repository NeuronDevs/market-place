import  Axios  from 'axios';
import { NavLink, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import Swal from 'sweetalert2'


export const Register = () => {

  const [ usernameReg, setUsernameReg ] = useState("");
  const [ emailReg, setEmailReg ] = useState("");
  const [ passwordReg, setPasswordReg ] = useState("");
  const navigate = useNavigate();

  const register = () =>{

    const options = {
        method: 'POST',
        url: 'http://localhost:4000/api/usuario/register',
        data: {email: emailReg, password: passwordReg, name: usernameReg},
        withCredentials: true
    }
    Axios.request(options).then(function (response) {
        if(response.data.success){
            Swal.fire(
                'Bien!',
                'Te has registrado correctamente',
                'success'
              )
            navigate("/login")
        }
    }).catch(function (error) {
        if(error.response.data.message.message){
        Swal.fire(
            'Error!',
            error.response.data.message.message,
            'error'
          )}else if(error.response.data.message.code === 11000){
            Swal.fire(
                'Error!',
                "Ya se ha creado una cuenta con este correo electronico",
                'error'
              )
          }
    });
   
  };


  return (
    <div className='container p-5'>
     
     <div className='d-flex align-items-center'>
       <NavLink to="/">
        <button type="button" className="btn-close" aria-label="Close"/>
        </NavLink>

      <h2 className='p-2 text-primary'>Registrarse</h2>

       </div>

  <div className="mb-3">
      <label htmlFor="name" className="form-label">Nombre</label>
      <input required type="text" className="form-control" id="name" aria-describedby="nameHelp" onChange={(e)=>{setUsernameReg(e.target.value)}}/>
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email</label>
      <input required type="email" className="form-control" id="email" aria-describedby="emailHelp"  onChange={(e)=>{setEmailReg(e.target.value)}}/>
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Contraseña</label>
      <input required type="password" className="form-control" id="password" autoComplete="on"  onChange={(e)=>{setPasswordReg(e.target.value)}}/>
    </div>
  
    <div className='d-flex flex-column text-center'>
    <button onClick={register}  className="btn btn-primary">Registrarse</button>
    </div>

    <div className='text-center pt-5'>
    <NavLink to="/login" className='text-decoration-none'>Ya tienes cuenta? Inicia sesión</NavLink>
    </div>
    
  </div>
  
  )
}