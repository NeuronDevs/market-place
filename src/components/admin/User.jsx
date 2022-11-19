import React from 'react'
import { useState } from 'react'
import  Axios  from 'axios';
import Swal from 'sweetalert2'


export const User = ({id, name, avatar,email,role,users,setUsers}) => {

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

    const handleDelete = () =>{

      const newData = users.filter((item) => item._id !== id)

        const options =  {
            method: 'DELETE',
            url: ruta,
            withCredentials: true
        }

        Axios.request(options).then((response) => {
            console.log(response);
            if(response.data.success){
                Swal.fire(
                    'Bien!',
                    'Has eliminado el usuario!',
                    'success'
                  )    
                  setUsers(newData);
            }
  
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
      
        <button onClick={handleDelete} type="button" className="btn btn-danger" >
          Eliminar
        </button>
      </div>
    </div>
  </div>
  )
}
