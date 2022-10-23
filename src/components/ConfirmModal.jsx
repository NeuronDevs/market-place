import React from 'react'

export const ConfirmModal = ({name, price, lot, idModal, img}) => {
  
    
  return (
    <div className="modal fade" id={idModal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">{name}</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <img src={img} className="p-2 rounded mx-auto d-block img-fluid" alt="..."/>
                <input defaultValue={1} min={1} max={lot} type="number" />
                <h5>Precio: {price}</h5>
                <p>Quedan {lot}</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" className="btn btn-primary">Agregar al carrito</button>
            </div>
            </div>
        </div>
    </div>
  )
}
