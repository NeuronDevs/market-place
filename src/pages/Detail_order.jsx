import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Detail_order = () => {
    const params = useParams();
    const ruta = `http://localhost:4000/api/order/${params.id}`
    const [isLoading, setIsLoading] = useState(true);
    const [order, setOrder] = useState({});

    useEffect(() => {
        const loadData = async () => {
            const result = await fetch(ruta, { credentials: 'include' })
                .then(response => response.json())
                .then(datos => datos)
            setIsLoading(false);
            setOrder(result.order);
        }
        loadData();
    }, []);

    return (
        <main>
            <div className="container">
                {
                    isLoading ?
                        <div>Cargando información de factura</div>
                        :
                        <div className="row">
                            <h2 className="my-5">Orden de compra # {order._id}</h2>
                            <div className="col-2 my-2"><strong>Fecha de la venta:</strong></div>
                            <div className="col-4 my-2">{order.creationDate}</div>
                            <div className="col-2 my-2"><strong>Usuario:</strong></div>
                            <div className="col-4 my-2">{order.user.email}</div>
                            <div className="col-2 my-2"><strong>Direcci&oacute;n:</strong></div>
                            <div className="col-4 my-2">{order.orderInfo.direction}</div>
                            <div className="col-2 my-2"><strong>Tel&eacute;fono:</strong></div>
                            <div className="col-4 my-2">{order.orderInfo.phone}</div>
                            <div className="col-2 my-2"><strong>Ciudad:</strong></div>
                            <div className="col-4 my-2">{order.orderInfo.city}</div>
                            <div className="col-2 my-2"><strong>Total venta:</strong></div>
                            <div className="col-4 my-2">${new Intl.NumberFormat().format(order.totalPrice)}</div>
                            <h4 className="pt-4 pt-5">Productos:</h4>
                            <div className="row">
                                <div className="col mt-5">
                                    <div className="table-responsive">
                                        <table className="table mx-auto align-middle">
                                            <thead>
                                                <tr>
                                                    <th>Cantidad</th>
                                                    <th>Imagen</th>
                                                    <th>Nombre</th>
                                                    <th>Precio unitario</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    order.items.map(product => (
                                                        <tr>
                                                            <td>{product.cant}</td>
                                                            <td><img src={product.images} height="90" width="90" alt={product.name} /></td>
                                                            <td>{product.name}</td>
                                                            <td>${new Intl.NumberFormat().format(product.price)}</td>
                                                            <td>${new Intl.NumberFormat().format(product.cant * product.price)}</td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div >
                            </div >

                        </div>
                }

            </div>
        </main>
    )
}

export default Detail_order;