import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';
import { SaleRow } from './SaleRow'



export const Sales = () => {
    const ruta = "jsons/sales.json"

    const { isLoading, products } = useFetch(ruta);
    let total=0;
    for(let i=0;i<products.length;i++){
        total=total+products[i].total;
    }

    return (
        <div className="container">
                    <table className="table mx-auto table-bordered" style={{"maxWidth":"300px"}}>
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
                        <tr>
                            <td align="center" colspan="2"><b>Total</b></td>
                            <td align="right"><b>${total}</b></td>
                        </tr>
                    </table>
                </div >
    )
}
