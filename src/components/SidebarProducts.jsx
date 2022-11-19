import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { ItemProduct } from './ItemProduct';



export const SidebarProducts = () => {
  const ruta = "http://localhost:4000/api/productos"
 
  const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const result = await fetch(ruta)
                .then(response => response.json())
                .then(datos => datos)
            setProducts({products:result.products});
            setIsLoading(false);
        }
        loadData();

    }, []);

  const [search, setSearch] = useState ("");
  
  console.log(products)
  return (
    <>
      <form name="fSearch">
        <input onChange={(e) => setSearch(e.target.value)} type="text" id="texto" name="texto" />
        <button type="button" class="btn btn-light" onclick="alert(fSearch.texto.value);">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
        </button>
     </form>
    <hr></hr>
    <ul class="nav nav-pills flex-column mb-auto">
    {
        
        isLoading 
        ?   <p>Esta cargando...</p> 
        
        : //products.products.map(product => (
          
        //   <ItemProduct id={product._id} name={product.name}></ItemProduct>
        // ))
        products.products.filter(product =>{ 

          return product.name.toUpperCase().includes(search.toUpperCase())}
          
          ).map(product2 =>  {
          return (<ItemProduct name={product2.name} id={product2._id} products={products} setProducts={setProducts}></ItemProduct>)})
          
         
        } 
      </ul>
    </>
    
  )
}