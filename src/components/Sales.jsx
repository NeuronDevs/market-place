import useFetch from '../hooks/useFetch'
import { SaleRow } from './SaleRow'
import { useState } from 'react'


export const Sales = () => {
    const ruta = "http://localhost:4000/api/admin/orders"

    const [userSearch, setUserSearch] = useState ("");
    const { isLoading, products } = useFetch(ruta, true);

    return (
        <div className="container">
            <table className="my-3 table mx-auto table-bordered tabla-normal" style={{ "maxWidth": "300px" }}>
                <thead><tr><th colSpan="3">
                    <h2 className="text-center">Ventas</h2>
                    <div className="mt-4">
                        <label for="filtroFecha" >Filtro por fecha:&nbsp;&nbsp; </label>
                        <input placeholder='aaaa-mm-dd' className="ml-3" onChange={(e) => setUserSearch(e.target.value)} type="text" id="filtroFecha" name="texto" />
                        <button type="button" class="btn btn-light">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </button>
                    </div>
                </th>
                </tr>
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
                            //products.orders.map(order => (
                            //    <SaleRow id={order._id} date={order.creationDate} total={order.totalPrice}></SaleRow>
                            //))
                            products.orders.filter(order=>{
                                return order.creationDate.toUpperCase().includes(userSearch.toUpperCase());
                            }).map( order2 =>{
                                return(<SaleRow id={order2._id} date={order2.creationDate} total={order2.totalPrice}></SaleRow>)
                            })
                    }
                    <tr>
                        <td align="center" colSpan="2"><b>Total</b></td>
                        <td align="right"><b>${new Intl.NumberFormat().format(products.cantidadTotal)}</b></td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}