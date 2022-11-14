import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';
import { Product } from './Product'



export const Products = () => {
  const ruta = "http://localhost:4000/api/productos"

  const { isLoading, products } = useFetch(ruta);
  console.log(products.products);
  return (
    <div className="p-4 container text-center">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {

          isLoading
            ? ( <p>Esta cargando...</p>)
            : 
            products.products.length === 0 ?
            (  <p>No hay productos...</p>)
            :
            (products.products.map((product, index) => (
              <Product key={index} lot={product.stock} id={product.id} name={product.name} price={product.price} images={product.images[0]?.url}></Product>
            )))
        }


      </div>
    </div>
  )
}
