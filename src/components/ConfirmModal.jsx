import React, { useState, useEffect } from 'react'

export const ConfirmModal = (props) => {

    const [cantP, setCantP] = useState(1);
    const [totalProducts, setTotalProducts] = useState(cantP * props.price);
    const [readyToShop, setReadyToShop] = useState(false);
    const addToCart = () => {
        setReadyToShop(true);
        //document.querySelector(`#${props.idModal}`).hide();
    }
    useEffect(() => {
        function getCart() {
            //return [{ id: 1, cant: 0, price: 10000, total: 50000, .... }]
            return JSON.parse(localStorage.getItem('cart'));
        }
        function addInCart(cartSession, product) {
            let prodFound = cartSession.findIndex((x) => x.id === product.id);
            product.product = product.id;
            if (prodFound !== -1) {
                cartSession[prodFound] = product;
            } else {
                cartSession.push(product);
            }
        }
        function setCartInSession(cartSession) {
            localStorage.setItem('cart', JSON.stringify(cartSession));
        }
        if (readyToShop) {
            //Obtiene la sesión del carrito
            let cartSession = getCart();
            if (cartSession === null) {
                cartSession = [];
            }
            const item = { ...props };
            delete item.idModal;
            item['total'] = totalProducts;
            item['cant'] = cantP;
            addInCart(cartSession, item);
            setCartInSession(cartSession);
        }
        setReadyToShop(false);
    }, [readyToShop])
    return (
        <div className="modal fade" id={props.idModal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{props.name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img src={props.images} style={{ maxHeight: "300px" }} className="p-2 rounded mx-auto d-block props.img-fluid" alt="..." />
                        <input defaultValue={cantP} min={1} max={props.lot} onChange={e => { setCantP(e.target.value); setTotalProducts(e.target.value * props.price); }} type="number" />
                        <h5>Precio: {props.price}</h5>
                        <p>Quedan {props.lot}</p>
                        <p>Total: {totalProducts}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" onClick={addToCart} className="btn btn-primary">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
