import React from 'react'
import { Product } from './Product'

export const Products = () => {
  return (
    <div className="p-4 container text-center">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
     
        <Product id={1}   name="producto 1" price={22000} img={"https://gdb.voanews.com/755809D7-41A7-4671-955E-5CA0664660C4_cx0_cy3_cw0_w1200_r1.jpg"} ></Product> 
     
     
        <Product id={2}  name="producto 2"  price={26000} img={"https://gdb.voanews.com/755809D7-41A7-4671-955E-5CA0664660C4_cx0_cy3_cw0_w1200_r1.jpg"} ></Product> 
 
     
        <Product id={3}  name="producto 3"  price={22000} img={"https://gdb.voanews.com/755809D7-41A7-4671-955E-5CA0664660C4_cx0_cy3_cw0_w1200_r1.jpg"} ></Product> 
     
     
        <Product id={4}  name="producto 4"  price={25000} img={"https://gdb.voanews.com/755809D7-41A7-4671-955E-5CA0664660C4_cx0_cy3_cw0_w1200_r1.jpg"} ></Product> 
     
     
        <Product id={5}  name="producto 5"    price={29000} img={"https://gdb.voanews.com/755809D7-41A7-4671-955E-5CA0664660C4_cx0_cy3_cw0_w1200_r1.jpg"} ></Product> 
  

      </div>
    </div>
  )
}
