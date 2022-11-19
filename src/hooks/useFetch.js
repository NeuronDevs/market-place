import  { useState, useEffect } from 'react'

function useFetch(ruta,isAdmin=false) {
    isAdmin=isAdmin?'include':'same-origin';
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const result = await fetch(ruta,{credentials:isAdmin})
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