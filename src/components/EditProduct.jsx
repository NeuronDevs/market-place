import React, { useState }  from 'react'
//import { ConfirmModal } from './ConfirmModal'

export const EditProduct = ({id,name, price, img}) => {

  //const [idModal, setidModal] = useState( `Modal-${id}`);

  return (
    <>
    <div className="col"> 
        <div className="card m-2" >
          <div className='img-container'>
          <img src={img} className="card-img-top card-img-style" alt="..."/>
          </div>
        </div>
    </div>
    <div>
    <form action="" >
        <label for="productName">Nombre: </label><br/>
        <input name="name" id="productName" value={name}/><br/>
        <label for="productPrice">Precio: </label><br/>
        <input name="price" id="productPrice"  value={price}/><br/>
        <button>Guardar</button>
        <button>Cancelar</button>
    </form>
    </div>
    </>
  )
}
