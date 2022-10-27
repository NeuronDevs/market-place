import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';
import { ItemProduct } from './ItemProduct';



export const SidebarProducts = () => {
  const ruta = "jsons/products.json"
 
  const {isLoading, products} = useFetch(ruta);

  return (
    <ul class="nav nav-pills flex-column mb-auto">
    {
        
        isLoading 
        ?   <p>Esta cargando...</p> 
        
        : products.map(product => (
          <ItemProduct id={product.id} name={product.name}></ItemProduct>
        ))
        } 
    
      </ul>
  )
}