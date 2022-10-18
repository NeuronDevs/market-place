import React from 'react'
import { Product } from './Product'

export const Products = () => {
  return (
    <div className="p-4 container text-center">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
     
        <Product name="producto 1" price={20000} img={"https://gdb.voanews.com/755809D7-41A7-4671-955E-5CA0664660C4_cx0_cy3_cw0_w1200_r1.jpg"} ></Product> 
     
     
        <Product name="producto 2"  price={20000} img={"https://gdb.voanews.com/755809D7-41A7-4671-955E-5CA0664660C4_cx0_cy3_cw0_w1200_r1.jpg"} ></Product> 
 
     
        <Product name="producto 3"  price={20000} img={"https://gdb.voanews.com/755809D7-41A7-4671-955E-5CA0664660C4_cx0_cy3_cw0_w1200_r1.jpg"} ></Product> 
     
     
        <Product name="producto 4"  price={20000} img={"https://gdb.voanews.com/755809D7-41A7-4671-955E-5CA0664660C4_cx0_cy3_cw0_w1200_r1.jpg"} ></Product> 
     
     
        <Product name="producto 5"    price={20000} img={"https://gdb.voanews.com/755809D7-41A7-4671-955E-5CA0664660C4_cx0_cy3_cw0_w1200_r1.jpg"} ></Product> 
  

      </div>
    </div>
  )
}
