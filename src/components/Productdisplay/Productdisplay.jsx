import React, { useContext } from 'react'
import './Productdisplay.css'
import star_icon from '../assets/star full.png'
import star_dull_icon from '../assets/star half.png'
import { ShopContext } from '../../Context/ShopContext'



const Productdisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
    <div className='productdisplay-left'>
      <div className="productdisplay-img-list">
        <div className='productdisplay-div'>
      <img src={`../../../public/${product?.image}`} alt=""/>
      </div>
        <div className='productdisplay-div'>
      <img src={`../../../public/${product?.image}`} alt=""/>
      </div>
        <div className='productdisplay-div'>
      <img src={`../../../public/${product?.image}`} alt=""/>
      </div>
        <div className='productdisplay-div'>
      <img src={`../../../public/${product?.image}`} alt=""/>
      </div>
      </div>
      <div className="productdisplay-img">
      <img className='productdisplay-main-img' src={`../../../public/${product?.image}`} alt=""/>

      </div>
        </div>
        <div className='productdisplay-right'>
          <h1>{product.name}</h1>
          <div className="productdisplay-right-stars">
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_dull_icon} alt=''/>
            <p>(122)</p>
          </div>
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">${product.old_price}</div>
            <div className="productdisplay-right-price-new">${product.new_price}</div>
          </div>
          <div className="productdisplay-right-description">If you would like to order a custom size or have specific preferences, please contact us!</div>
          <div className="product-display-right-size">
            <h1>Select size</h1>
            <div className="productdisplay-righ-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
          <p className='productdisplay-right-category'><span>Category: </span>Women, T-shirt, Crop Top </p>
          <p className='productdisplay-right-category'><span>Tags: </span>Modern, Latest</p>

    </div>
   
    </div>

  )
}

export default Productdisplay;