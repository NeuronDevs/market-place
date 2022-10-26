import React, { useState } from 'react'
import { ConfirmModal } from './ConfirmModal'

export const Product = ({ id, name, price, img, lot }) => {

  const [idModal, setidModal] = useState(`Modal-${id}`);

  return (
    <div className="col">
      <div className="card m-2" >
        <div className='img-container'>
          <img src={img} className="card-img-top card-img-style" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${idModal}`}>
            Comprar
          </button>
          <ConfirmModal name={name} price={price} img={img} lot={lot} idModal={idModal}></ConfirmModal>

        </div>
      </div>
    </div>
  )
}
