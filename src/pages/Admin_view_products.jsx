import React from 'react'
import { AdminListProduct } from '../components/AdminListProduct';

const Admin_view_products= () => {
  return (
   <div className='p-4 container'>
    <h4>Administrador - Lista de Productos</h4>
    <AdminListProduct></AdminListProduct>    
   </div>
 
  )
}

export default Admin_view_products;