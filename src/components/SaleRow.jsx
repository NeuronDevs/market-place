import React, { useState } from 'react'
//import { ConfirmModal } from './ConfirmModal'

export const SaleRow = ({ id, date , total }) => {

    //  const [idModal, setidModal] = useState(`Modal-${id}`);

    return (
        <tr>
            <td>{date}</td>
            <td><a href="#">{id}</a></td>
            <td>${total}</td>
        </tr>
    )
}
