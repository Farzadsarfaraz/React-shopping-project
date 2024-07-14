import React from 'react'
import './RelatedProucts.css'
import data_product from '../../../public/all_product.json'
import Item from '../Item/Item'



const RelatedProucts = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related products</h1>
        <hr/>
        <div className='relatedproducts-item'>
            {data_product.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image ={`../../../public/${item.image}`} new_price = {item.new_price} old_price ={item.old_price} description={item.description}/>
            })}

        </div>
    </div>
  )
}

export default RelatedProucts