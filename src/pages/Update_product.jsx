import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { EditProduct } from '../components/EditProduct';
import  Axios  from 'axios';
import Swal from 'sweetalert2'
import useFetch from '../hooks/useFetch';


export const Update_product = () => {

    const params = useParams();
    const [name, setName] = useState("");
    const [price, setPrice] = useState(10000);
    const [stock, setStock] = useState(1);
    const [description, setDescription] = useState("");
    const [images, setImages] =useState("");

    const ruta = `http://localhost:4000/api/producto/${params.id}`
 

const [isLoading, setIsLoading] = useState(true);
const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const result = await fetch(ruta)
                .then(response => response.json())
                .then(datos => datos)
            setProducts(result);
            setIsLoading(false);
            console.log(result);
            setName(result.product.name);
            setDescription(result.product.description);
            setPrice(result.product.price);
            setStock(result.product.stock);
            setImages(result.product.images[0]?.url);
        }
        loadData();
    }, []);

    


    const update_product = (e) =>{
        e.preventDefault();
        const options =  {
            method: 'PUT',
            url: ruta,
            data:{
            "name": name,
            "price": price,
            "description": description,
            "stock": stock,
            "images":[{
                "public_id":"0",
                "url": images
            }]
            },
            withCredentials: true
        }

        Axios.request(options).then((response) => {
            console.log(response);
            if(response.data.success){
                Swal.fire(
                    'Bien!',
                    'Has actualizado un producto!',
                    'success'
                  )    
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
    <div>
    <EditProduct  price={price} setDescription={setDescription} setName={setName} setStock={setStock} setPrice={setPrice} description={description} name={name} stock={stock} images={images} setImages={setImages} nuevo_producto={update_product} ></EditProduct>

    </div>
  )
}
