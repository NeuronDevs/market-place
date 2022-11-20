import React, { useState } from 'react'
import { ConfirmModal } from './ConfirmModal'

export const Product = (props) => {

  const [idModal, setidModal] = useState(`Modal-${props.id}`);

  return (
    <div className="col">
      <div className="card m-2" >
        <div className='img-container'>
          <img src={props.images} className="card-img-top card-img-style" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">${new Intl.NumberFormat().format(props.price)}</p>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${idModal}`}>
            Comprar
          </button>
          <ConfirmModal id={props.id} name={props.name} price={props.price} images={props.images} lot={props.lot} idModal={idModal}></ConfirmModal>

        </div>
      </div>
    </div>
  )
}
