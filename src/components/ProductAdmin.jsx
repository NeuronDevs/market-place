import React, { useState } from 'react'
import { ConfirmModal } from './ConfirmModal'

export const ProductAdmin = (props) => {


  return (
    <div className="col">
      <div className="card m-2" >
        <div className='img-container'>
          <img src={props.img} className="card-img-top card-img-style" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.price}</p>
          <button type="button" className="btn btn-primary">
            Modificar
          </button>
        </div>
      </div>
    </div>
  )
}