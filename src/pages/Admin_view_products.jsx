import React from 'react'
import { AdminListProduct } from '../components/AdminListProduct';
import { Button } from '@material-ui/core'
import { AddCircle } from '@material-ui/icons';


const Admin_view_products= () => {
  return (
   <div className='p-4 container'>
    <div className="text_rigth">
        <Button variant='contained' color="primary"  endIcon={<AddCircle />}>
        Añadir
        </Button>
    </div>
    <h4>Administrador - Lista de Productos</h4>
    <AdminListProduct></AdminListProduct>    
   </div>
 
  )
}

export default Admin_view_products;