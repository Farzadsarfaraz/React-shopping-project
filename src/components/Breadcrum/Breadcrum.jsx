import React from 'react'

const Breadcrum = (props) => {

    const {product} = props;
  return (
    
    <div>
        Home {product.category} and {product.name}
        
        
    </div>
  )
}

export default Breadcrum