import React from 'react'
import { Products } from '../components/Products';

const Admin_view_products= () => {
  return (
   <div className='p-4 container'>
    <h4>Administrar Productos</h4>
    <Products></Products>    
   </div>
 
  )
}

export default Admin_view_products;