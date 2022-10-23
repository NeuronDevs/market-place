import React, { useState, useEffect } from 'react'


function useFetch(ruta) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("json/products.json")
            .then(response => response.json())
            .then(datos => console.log(datos))

    }, []);

    return products;

}

export default useFetch;