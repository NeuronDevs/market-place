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
            console.log(result);
            setOrder(result.order);
        }
        loadData();
    }, []);

    return (
        <div>
            {
                isLoading ?
                    <div>Cargando información de factura</div>
                    :
                    <div>
                        <h1>Detalle de orden de compra</h1>
                        <div>Factura n&uacute;mero:</div>
                        <div>{order._id}</div>
                        <div>Fecha de la venta:</div>
                        <div>{order.creationDate}</div>
                        <div>Usuario:</div>
                        <div>{order.user.email}</div>
                        <div>Direcci&oacute;n:</div>
                        <div>{order.orderInfo.direction}</div>
                        <div>Tel&eacute;fono:</div>
                        <div>{order.orderInfo.phone}</div>
                        <div>Ciudad:</div>
                        <div>{order.orderInfo.city}</div>
                        <div>Total factura:</div>
                        <div>{order.totalPrice}</div>

                        <div className="row">
                            <div className="col mt-5">
                                <div className="table-responsive">
                                    <table className="table mx-auto align-middle">
                                        <thead>
                                            <tr>
                                                <th>Cant</th>
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
                                                        <td>{product.price}</td>
                                                        <td>{product.cant*product.price}</td>
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
    )
}

export default Detail_order;