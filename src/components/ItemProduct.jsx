import React from 'react'
import { Link } from 'react-router-dom'
import  Axios  from 'axios';
import Swal from 'sweetalert2'

export const ItemProduct = ({ id, name }) => {

    
    const ruta = `http://localhost:4000/api/producto/${id}`

    const handleDelete = () =>{
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
                    'Has eliminado el producto!',
                    'success'
                  )    
            }
        
        }).catch((error) => {
           console.log(error)
        });

    }



    return (
        <div  className="d-flex">
        <li >
            <Link to ={`/update/producto/${id}`}>
            <h5  className="nav-link link-dark" aria-current="page">{name}</h5>
            </Link>
        </li>
        <button onClick={handleDelete} className='btn m-2 btn-sm btn-danger'>eliminar</button>
            </div>

    )
}