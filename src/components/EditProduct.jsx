import React, { useState } from 'react'

export const EditProduct = ({ id, name, price , description, img }) => {

  return (
    <div class="row mb-3 text-center">
      <div class="col-md-6 px-5">
            <img class="col-md-9" src={img} alt="..." />
        <button type="submit" class="btn btn-primary">escoger imagen</button>
      </div>
      <div class="col-md-6 py-3 d-flex justify-content-evenly align-items-center text-center">
        <form action="" class="card px-4 py-4" >
        <div class="mb-3">
              <label for="productName" class="form-label">Nombre del producto</label>
              <input type="text" class="form-control" id="productName" placeholder="Nombre del producto" value={name} />
            </div>
            <div class="mb-3">
              <label for="productDescription" class="form-label">Descripci&oacute;n</label>
              <textarea type="text" class="form-control" id="productDescription" placeholder="Descripci&oacute;n" value={description} />
            </div>
            <div class="mb-3">
              <label for="productPrice" class="form-label">Precio</label>
              <input type="text" class="form-control" id="productPrice" placeholder="Precio" value={price} />
            </div>
          <button type="submit" class="btn btn-primary">Guardar</button>
        </form>

      </div>
    </div>
  )
}