//import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';
import { Product } from './Product'



export const Products = () => {
  const ruta = "jsons/products.json"
 
  const {isLoading, products} = useFetch(ruta);

  return (
    <div className="p-4 container text-center">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {
        
        isLoading 
        ?   <p>Esta cargando...</p> 
        
        : products.map(product => (
          <Product key={product.id} lot={product.lot} id={product.id} name={product.name} price={product.price} img={product.img}></Product>
        ))
        } 
    

      </div>
    </div>
  )
}
