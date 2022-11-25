import React from 'react'
import { Link } from 'react-router-dom'
import  Axios  from 'axios';
import Swal from 'sweetalert2'

export const ItemProduct = ({ id, name, products, setProducts }) => {

    
    const ruta = `http://localhost:4000/api/producto/${id}`

    const handleDelete = () =>{
        console.log(products.products.filter((item) => item._id !== id))
        const newData = products.products.filter((item) => item._id !== id)
      
        
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
                    setProducts({products:newData});
            }
        
        }).catch((error) => {
           console.log(error)
        });

    }



    return (
        <div  className="d-flex">
        <li >
            <Link to ={`/update/producto/${id}`} style={{textDecoration: 'none'}}>
            <h5  className="nav-link link-dark" aria-current="page">{name}</h5>
            </Link>
        </li>
        {/*<button onClick={handleDelete} className='btn m-2 btn-sm btn-danger'>eliminar</button>
        */}
        </div>

    )
}