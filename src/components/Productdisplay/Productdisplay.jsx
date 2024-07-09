import React from 'react'
import './Productdisplay.css'



const Productdisplay = (props) => {
    const {product} = props;
    console.log(product?.image);
  return (
    <div className='productdisplay'>
        <img src={`../../../public/${product?.image}`} alt=""/>
    </div>
  )
}

export default Productdisplay;