import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { ItemProduct } from './ItemProduct';



export const SidebarProducts = () => {
  const ruta = "http://localhost:4000/api/productos"
 
  const {isLoading, products} = useFetch(ruta);

  console.log(products)
  return (
    <ul class="nav nav-pills flex-column mb-auto">
    {
        
        isLoading 
        ?   <p>Esta cargando...</p> 
        
        : products.products.map(product => (
          <Link to ={`/update/producto/${product._id}`}>
          <ItemProduct id={product._id} name={product.name}></ItemProduct>
          </Link>
        ))
        } 
      </ul>
  )
}