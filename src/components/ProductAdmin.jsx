import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import { Stack } from '@mui/system';
import { Delete } from '@material-ui/icons';
import { Edit } from '@material-ui/icons';


export const ProductAdmin = ({id,name,price,img}) => {


  return (
    
      <div className="col">
 
        <div className="card m-2" >
          <div className='img-container'>
            <img src={img} className="card-img-top card-img-style" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">${new Intl.NumberFormat().format(price)}</p>
            
            <Stack direction="row" spacing={1} className='justify_text'>
              <Button variant='contained' color="primary" startIcon={<Edit />} href={`/update/producto/${id}`} >
              Editar
              </Button>
              <Button variant='contained' color="secondary" startIcon={<Delete />}>
              Eliminar
              </Button>
            </Stack>
          </div>
        </div>
      </div>

  )
}