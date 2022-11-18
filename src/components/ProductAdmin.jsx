import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import { Stack } from '@mui/system';
import { Delete } from '@material-ui/icons';
import { Edit } from '@material-ui/icons';


export const ProductAdmin = (props) => {


  return (
    
      <div className="col">
 
        <div className="card m-2" >
          <div className='img-container'>
            <img src={props.img} className="card-img-top card-img-style" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.price}</p>
            
            <Stack direction="row" spacing={1} className='justify_text'>
              <Button variant='contained' color="primary" startIcon={<Edit />}>
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