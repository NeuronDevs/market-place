import React, { useEffect, useState } from 'react'

export const Cart = () => {

    const [cartSession, setCartSession] = useState([]);
    const [total, setTotal] = useState(0);

    const calculateTotalCart = () => {
        let totalIntern = 0;
        cartSession.forEach((x) => {
            totalIntern = totalIntern + x.total;
        });
        setTotal(totalIntern);
    }
    function addInCart(cartSessionParam, product) {
        let prodFound = cartSessionParam.findIndex((x) => x.id === product.id);
        if (product.cant === 0) {
            cartSessionParam.splice(prodFound, 1);
            cartSessionParam = cartSessionParam.filter(x => x);
        } else {
            if (prodFound !== -1) {
                cartSessionParam[prodFound] = product;
            } else {
                cartSessionParam.push(product);
            }
        }
        setCartSession(cartSessionParam);
        localStorage.setItem('cart', JSON.stringify(cartSessionParam));
        calculateTotalCart();
    }

    const remove = (idRemove) => {
        addInCart(cartSession, { id: idRemove, cant: 0 });
    }

    const emptyCart = () => {
        setCartSession([]);
        localStorage.setItem('cart', JSON.stringify([]));
        calculateTotalCart();
    }

    const buy = () => {
        //TODO: terminar esta vaina
        alert('Aquí comprar');
    }
    useEffect(() => {
        const calculateTotalCartIntern = () => {
            let totalIntern = 0;
            cartSession.forEach((x) => {
                totalIntern = totalIntern + x.total;
            });
            setTotal(totalIntern);
        }
        function getCart() {
            return JSON.parse(localStorage.getItem('cart'));
        }
        let cartSessionIntern = getCart();
        if (cartSessionIntern === null) {
            cartSessionIntern = [];
        }
        setCartSession(cartSessionIntern);
        calculateTotalCartIntern();
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col mt-5">
                    <div className="table-responsive">
                        <table className="table mx-auto align-middle">
                            <thead>
                                <tr>
                                    <th colSpan="6" className="ancho-columna">
                                        <h3 className="text-center">Carrito de compras</h3>
                                        <button className="btn btn-danger" onClick={emptyCart}>Vaciar carrito</button>
                                    </th>
                                </tr>
                                <tr>
                                    <th>Cant</th>
                                    <th>Imagen</th>
                                    <th>Nombre</th>
                                    <th>Precio unitario</th>
                                    <th>Total</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartSession.map(product => (
                                        <tr>
                                            <td>{product.cant}</td>
                                            <td><img src={product.img} height="90" width="90" alt={product.name} /></td>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>{product.total}</td>
                                            <td><button className="btn btn-danger" onClick={() => { remove(product.id) }}>Quitar</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>

                    <p><strong>Total: </strong>{total}</p>
                    <button className="btn btn-warning" onClick={emptyCart}>Cancelar</button>
                    <button className="btn btn-primary" onClick={buy}>Comprar</button>
                </div >
            </div >
        </div>
    )
}
