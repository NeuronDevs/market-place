import React from 'react'

export const Product = ({name, price, img}) => {
  return (
    <div class="col"> 
        <div class="card m-2" >
            <img src={img} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{price}</p>
                <a href="./" class="btn btn-primary">Comprar</a>
            </div>
        </div>
    </div>
  )
}
