import React from 'react'
import arrow_icon from '../assets/arrow_icon.png'
import './Breadcrum.css'

const Breadcrum = (props) => {

    const {product} = props;
  return (
    
    <div className='breadcrum'>
        Home <img src={arrow_icon}/> SHOP <img src={arrow_icon}/> {product?.category} <img src={arrow_icon}/> {product?.name}
        
        
    </div>
  )
}

export default Breadcrum