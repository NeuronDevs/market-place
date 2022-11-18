import React from 'react'
import { useState } from 'react'
import  Axios  from 'axios';

export const User = ({id, name, avatar,email,role}) => {

    const ruta = `http://localhost:4000/api/user/${id}`;


    const handlechange = (e)=>{ 
      console.log(e.target.value);
    const options =  {
      method: 'PUT',
      url: ruta,
      data: {
        "role": e.target.value
      },
      withCredentials: true
    }
    Axios.request(options).then((response) => {
    console.log(response)
    }).catch((error) => {
    console.log(error)
    });

    }

  return (
    <div className="col">
    <div className="card m-2" >
      <div className='img-container'>
        <img src={avatar.url} className="card-img-top card-img-style" alt="..." />
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{email}</p>
         
            <select defaultValue={role} onChange={handlechange} className=" mb-2 form-select" aria-label="Default select example">
            <option value="user">User</option>
            <option value="admin">Admin</option> 
            </select   > 
      
        <button type="button" className="btn btn-danger" >
          Eliminar
        </button>
      </div>
    </div>
  </div>
  )
}
