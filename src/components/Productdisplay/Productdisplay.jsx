import React from 'react'
import './Productdisplay.css'

const Productdisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
        <img src={product.image} alt="" width={400}/>
    </div>
  )
}

export default Productdisplay