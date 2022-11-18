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