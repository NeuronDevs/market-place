import React, { useState, useEffect } from 'react'

function useFetch(ruta) {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const result = await fetch(ruta)
                .then(response => response.json())
                .then(datos => datos)
            setProducts(result);
            setIsLoading(false);
        }
        loadData();

    }, []);

    return { isLoading, products };

}

export default useFetch;