import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Product } from './Product'



function useFetch() {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const  loadData = async() =>{
        const result = await fetch("jsons/products.json")
        .then(response => response.json())
        .then(datos => datos)
        setProducts(result);
        setIsLoading(false);
      }
      loadData();

    }, []);

    return {isLoading, products};

}

export const Products = () => {
  
 
  const {isLoading, products} = useFetch();
  console.log(products);

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
