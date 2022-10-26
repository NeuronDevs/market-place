import React from 'react'
import { EditProduct } from '../components/EditProduct';

const New_product_page = () => {
  return (
    <div class="wrapper">
      <nav id="sidebar">
        <div class="sidebar-header">
          <h3>Productos</h3>
        </div>
        <ul class="list-unstyled components">
          <li class="active">
            <a href="#" >item1</a>
          </li>
          <li class="active">
            <a href="#" >item2</a>
          </li>
        </ul>
      </nav>
      <div class="Poner-derecha">
        <EditProduct id={0} price={0} name={'Nuevo'} img={'../NO_PHOTO.png'}></EditProduct>
      </div>
    </div>

  )
}

export default New_product_page;