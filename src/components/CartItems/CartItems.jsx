import React, { useContext } from "react";
import "./cartitem.css";
import remove_icon from "../../components/assets/removeicon.png";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);



  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <div  className="carticon-product-icon" >
                <img src={e.image} alt=""/>
                </div>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img className="cartiems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr/>                        
            </div>
          );
        }
        return null;
      })}
      <p style={{marginTop: "15px"}}>{getTotalCartAmount() == 0? "The list is empty. Please select a product first." : ""}</p>
      <div className="caritems-down">
      <div>
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div/>
          <div className="cartitems-total-item">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div className="cartitems-total-item">
            <p>Shipping fee</p>
            <p>Free</p>
          </div>
          <hr/>
          <div className="cartitems-total-item">
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>
          <button>PROEED TO CHECKOUT</button>
        </div>   
      </div>
      <div className="cartitem-promocode">
        <p>If you have a promo code, Enter it here</p>
        <div className="cartitem-promobox">
          <input type="text" placeholder="Promo code" />
          <button>Submit</button>
        </div>
      </div>
      </div>
      </div>
  );
};

export default CartItems;
