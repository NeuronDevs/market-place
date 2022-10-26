import React, { useState } from 'react'

export const ProductAdmin = ({ id, name, price, img, lot }) => {


  return (
    <div className="col">
      <div className="card m-2" >
        <div className='img-container'>
          <img src={img} className="card-img-top card-img-style" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
          <button type="button" className="btn btn-primary">
            Modificar
          </button>
        </div>
      </div>
    </div>
  )
}