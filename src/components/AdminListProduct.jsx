import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';
import { ProductAdmin } from './ProductAdmin'



export const AdminListProduct = () => {
  const ruta = "jsons/products.json"
 
  const {isLoading, products} = useFetch(ruta);

  return (
    <div className="p-4 container text-center">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {
        
        isLoading 
        ?   <p>Esta cargando...</p> 
        
        : products.map(product => (
          <ProductAdmin key={product.id} lot={product.lot} id={product.id} name={product.name} price={product.price} img={product.img}></ProductAdmin>
        ))
        } 
    
      </div>
    </div>
  )
}
