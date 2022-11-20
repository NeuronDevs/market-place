import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//import { ConfirmModal } from './ConfirmModal'

export const SaleRow = ({ id, date , total }) => {

    //  const [idModal, setidModal] = useState(`Modal-${id}`);

    return (
        <tr>
            <td>{date}</td>
            <td><Link to={`/orden/${id}`}>{id}</Link></td>
            <td align="right">${total}</td>
        </tr>
    )
}
