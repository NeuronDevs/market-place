import  Axios  from 'axios';
import { NavLink, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import Swal from 'sweetalert2'


export const Login = ({setAuth, setRole}) => {    

  
  const [ emailLog, setEmailLog ] = useState("");
  const [ passwordLog, setPasswordLog ] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const login = (e) =>{
    e.preventDefault();
    setLoading(true)
    
        
    const options = {
        method: 'POST',
        url: 'http://localhost:4000/api/login',
        data: {email: emailLog, password: passwordLog},
        withCredentials: true
    };
    
    Axios.request(options).then(function (response) {
        console.log(response);
        if(response.data.success){
            setAuth(true);
            setRole(response.data.user.role)
            Swal.fire(
                'Bien!',
                'Has iniciado sesión!',
                'success'
              )
            navigate("/")
            setLoading(false)

        }
    }).catch(function (error) {
      setLoading(false)
        Swal.fire(
            'Error!',
            error.response.data.message.msj,
            'error'
          )
    });
  };
  

  return (
    <div className='container p-5'>
       
       <div className='d-flex align-items-center'>
       <NavLink to="/">
        <button type="button" className="btn-close" aria-label="Close"/>
        </NavLink>

      <h2 className='p-2 text-primary'>Iniciar sesión</h2>

       </div>

      <form>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input required type="email" onChange={(e)=>{setEmailLog(e.target.value)}} className="form-control" id="email"  aria-describedby="emailHelp"/>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Contraseña</label>
        <input required type="password" onChange={(e)=>{setPasswordLog(e.target.value)}} className="form-control" id="password"/>
      </div>

      <div className='d-flex flex-column text-center'>
      <button onClick={login} className="btn btn-primary">Iniciar sesión</button>
      </div>

      {loading && <p className='text-center m-1 text-primary'>Comprobando tus datos...</p>}

      </form>
    

      <div className='text-center pt-5'>
      <NavLink to="/register" className='text-decoration-none'>No tienes cuenta? Registrate</NavLink>
      </div>
      
      </div>
    
  )
}