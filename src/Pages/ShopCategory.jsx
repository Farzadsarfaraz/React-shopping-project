import { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdowon_icon from '../components/assets/drop-down.png'
import Item from '../components/Item/Item'

function ShopCategory(props) {
  const {all_product} = useContext(ShopContext);

  return (
    <div className="shop-category">
      <div  className='shop-category-banner'>
      <img src={props.banner} alt=''/>
      <h1>Experience the best with us</h1>
      </div>
      <div className="shopcategory-indexSort">
      <p><span>Showing 1-12</span> out of 36 Products</p>
      <div onClick={()=>alert("This Function is not still working. Try later please!")} className="shoptcategory-sort">
        Sort by <img src={dropdowon_icon} alt=''/>
      </div>
      
    </div>
    <div className="shopcategory-products">
      {all_product.map((item, i)=>{
        if(props.category === item.category){
          return <Item key={i} id={item.id} name={item.name} image ={item.image} new_price = {item.new_price} old_price ={item.old_price} description={item.description} />
        }else{
          return null;
        }
      })}
    </div>
    <div className="shopcategory-loadmore">
      Explore more
    </div>
    </div>
  )
}

export default ShopCategory