import  Axios  from 'axios';
import Swal from 'sweetalert2'
import React, { useState } from 'react'
import { EditProduct } from '../components/EditProduct';
import { SidebarProducts } from '../components/SidebarProducts';

const New_product_page = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(10000);
    const [stock, setStock] = useState(1);
    const [description, setDescription] = useState("");

    const nuevo_producto = (e) => {
        e.preventDefault();
        const options =  {
            method: 'POST',
            url: 'http://localhost:4000/api/producto/nuevo',
            data:{
            "name": name,
            "price": price,
            "description": description,
            "stock": stock,
            "images":[{
                "public_id":"0",
                "url": "https://dlcdnwebimgs.asus.com/gain/e94c945e-6374-44a3-a21b-62943a64f103/"
            }]
            },
            withCredentials: true
        }

        Axios.request(options).then((response) => {
            console.log(response);
            if(response.data.success){
                Swal.fire(
                    'Bien!',
                    'Has creado un nuevo producto!',
                    'success'
                  )    
                  setDescription("");
                  setName("");
                  setPrice(10000);
                  setStock(1);
            }
        
        }).catch((error) => {
            if( error.response.data.message.errors.name){
            Swal.fire(
                'Error!',
                error.response.data.message.errors.name.message,
                'error'
              )}
            else if(error.response.data.message.errors.description){
                Swal.fire(
                    'Error!',
                    error.response.data.message.errors.description.message,
                    'error')
              }
        });
    }

    return (

        <main class="d-flex flex-nowrap">

            <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ "width": "280px" }}>
            <div >
                    <a href="#" class="d-flex align-items-center link-dark text-decoration-none"aria-expanded="false">
                        <strong>+ Nuevo</strong>
                    </a>
                </div>
                <hr></hr>
                <form name="fSearch">
                    <input type="text" id="texto" name="texto" />
                    <button type="button" class="btn btn-light" onclick="alert(fSearch.texto.value);">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </button>
                </form>
                <SidebarProducts></SidebarProducts>
                <hr />
            </div>

            <div class="b-example-divider b-example-vr"></div>
            <div class="container">
            <h2 class="text-center p-2">Nuevo producto</h2>
            <EditProduct  price={price} setDescription={setDescription} setName={setName} setStock={setStock} setPrice={setPrice} description={description} name={name} stock={stock} img={'../NO_PHOTO.png'} nuevo_producto={nuevo_producto} ></EditProduct>
            </div>


        </main>


    )
}

export default New_product_page;