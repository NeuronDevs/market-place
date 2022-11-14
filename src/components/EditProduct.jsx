import React, { useState } from 'react'

export const EditProduct = ({ id, name, setName, price, setPrice, description, setDescription, stock, setStock, img, nuevo_producto }) => {

  return (
    <div class="row mb-3 text-center">
      <div class="col-md-6 px-5">
            <img class="col-md-9" src={img} alt="..." />
            <div class="mb-3">
              <label for="productImage" class="form-label">Imagen del producto</label>
              <input type="file" class="form-control" id="productImage" />
            </div>
      </div>
      <div class="col-md-6 py-3 d-flex justify-content-evenly align-items-center text-center">
        <form action="" class="card px-4 py-4" >
            <div class="mb-3">
              <label for="productName" class="form-label">Nombre del producto</label>
              <input required onChange={(e)=>{setName(e.target.value)}} type="text" class="form-control" id="productName" placeholder="Nombre del producto" value={name} />
            </div>
            <div class="mb-3">
              <label for="productStock" class="form-label">Stock</label>
              <input required min={1} value={stock} onChange={(e)=>{setStock(e.target.value)}} type="number" class="form-control" id="productPrice" placeholder="Stock" />
            </div>
            <div class="mb-3">
              <label for="productPrice" class="form-label">Precio</label>
              <input required min={1} value={price} onChange={(e)=>{setPrice(e.target.value)}} type="number" class="form-control" id="productPrice" placeholder="Precio"  />
            </div>
            <div class="mb-3">
              <label for="productDescription" class="form-label">Descripci&oacute;n</label>
              <textarea required onChange={(e)=>{setDescription(e.target.value)}} type="text" class="form-control" id="productDescription" placeholder="Descripci&oacute;n" value={description} />
            </div>
          <button type='submit' onClick={nuevo_producto} class="btn btn-primary">Guardar</button>
        </form>

      </div>
    </div>
  )
}