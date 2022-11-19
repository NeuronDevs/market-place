import React, { useEffect, useState } from 'react'
import { SaleRow } from './SaleRow'



export const Sales = () => {
    const ruta = "http://localhost:4000/api/admin/orders"

    const { isLoading, products } = useFetch(ruta);
    console.log("hola");
    console.log(products);
    console.log(products.cantidadTotal);

    return (
        <div className="container">
            <table className="my-3 table mx-auto table-bordered tabla-normal" style={{ "maxWidth": "300px" }}>
                <thead><tr><th colSpan="3"><h3 className="text-center">Ventas</h3></th></tr>
                    <tr>
                        <th>Fecha</th>
                        <th>IdVenta</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        isLoading
                            ? <tr><td>Esta cargando...</td></tr>

                            :
                            products.orders.map(order => (
                                <SaleRow id={order._id} date={order.creationDate} total={order.totalPrice}></SaleRow>
                            ))
                    }
                    <tr>
                        <td align="center" colSpan="2"><b>Total</b></td>
                        <td align="right"><b>${products.cantidadTotal}</b></td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}
