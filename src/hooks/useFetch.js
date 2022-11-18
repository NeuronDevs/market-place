import React, { useState, useEffect } from 'react'

function useFetch(ruta, isAdmin = false) {
    isAdmin = isAdmin ? true : 'same-origin';
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const result = await fetch(ruta, { credentials: true })
                .then(response => response.json())
                .then(datos => datos)
            console.log(result);
            setProducts(result);
            setIsLoading(false);
        }
        loadData();

    }, []);

    return { isLoading, products };

}

export default useFetch;