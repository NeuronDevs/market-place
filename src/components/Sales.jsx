import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';
import { SaleRow } from './SaleRow'



export const Sales = () => {
    const ruta = "jsons/sales.json"

    const { isLoading, products } = useFetch(ruta);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-auto mt-5">
                    <table className="table table-bordered mx-auto d-block table-responsive">
                    <th colspan="3" className="ancho-columna"><h3 className="text-center">Ventas</h3></th>
                        <tr>
                            <th>Fecha</th>
                            <th>IdVenta</th>
                            <th>Total</th>
                        </tr>
                        {

                            isLoading
                                ? <p>Esta cargando...</p>

                                :
                                products.map(product => (
                                    <SaleRow id={product.id} date={product.date} total={product.total}></SaleRow>
                                ))
                        }
                    </table>
                </div >
            </div ></div>
    )
}
