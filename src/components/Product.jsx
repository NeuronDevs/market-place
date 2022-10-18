import React from 'react'

export const Product = ({name, price, img}) => {
  return (
    <div className="col"> 
        <div className="card m-2" >
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price}</p>
                <a href="./" className="btn btn-primary">Comprar</a>
            </div>
        </div>
    </div>
  )
}
