import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

import { useParams } from 'react-router-dom';
import Axios from 'axios';

const Detail_order = () => {
    const navigate = useNavigate();
    const params = useParams();
    const ruta = `http://localhost:4000/api/order/${params.id}`
    const ruta_delete = `http://localhost:4000/api/admin/order/${params.id}`
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

    const delete_order = () => {
        const options = {
            method: 'DELETE',
            url: ruta_delete,
            withCredentials: true
        }
        Swal.fire({
            title: 'Realmente desea anular esta venta?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Yes',
            denyButtonText: 'No',
            customClass: {
                confirmButton: 'order-2',
                denyButton: 'order-3',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                Axios.request(options).then((response) => {
                    navigate("/ventas")
                })
            } else if (result.isDenied) {
                Swal.fire('No se eliminó la orden', '', 'info')
            }
        })
    }

    return (
        <main>
            <div className="container">
                {
                    isLoading ?
                        <div>Cargando información de factura</div>
                        :
                        <div className="row">
                            <div className="col-10 my-5"><h2>Orden de compra # {order._id}</h2></div>
                            <div className="col-2 my-5"><button onClick={delete_order} className='btn mt-2 btn-danger'>Anular venta</button></div>
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