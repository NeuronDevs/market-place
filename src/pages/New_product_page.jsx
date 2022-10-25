import React from 'react'
import { EditProduct } from '../components/EditProduct';

const New_product_page = () => {
  return (
    <>
    <div>
        <div className=''>
          <h4>Productos</h4>


    <EditProduct id={0} price={0} name={'Nuevo'} img={'../NO_PHOTO.png'}></EditProduct>  
        </div>
    </div>
   </>
  )
}

export default New_product_page;