import { useContext, useState, useEffect } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdowon_icon from "../components/assets/drop-down.png";
import Item from "../components/Item/Item";

function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  const [filtering, setFiltering] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sorting, setSorting] = useState(false);

  useEffect(() => {
    if (filtering === '') {
      setFilteredProducts(all_product.filter(item => item.category === props.category));
    } else {
      const filtered = all_product.filter(
        item => item.category === props.category && item.new_price <= filtering
      );
      setFilteredProducts(filtered);
    }
  }, [filtering, all_product, props.category]);

  return (
    <div className="shop-category">
      <div className="shop-category-banner">
        <img src={props.banner} alt=""/>
        <h1>Experience the best with us</h1>
      </div>
      <div className="shopcategory-indexSort">
        <div>
        <div className="shoptcategory-sort">
          <p onClick={()=>setSorting(sorting? false : true)}>Sort by price<img src={dropdowon_icon} alt="" /></p>
          <input 
        placeholder="Enter a price" className={sorting? "" : "inputPrice"}
        onChange={(e) => setFiltering(Number(e.target.value) || '')} 
      />
        </div>
        </div>
        <p>
          <span>Showing {filteredProducts.length} </span> out of {all_product.length} Products
        </p>
      </div>
      <div className="shopcategory-products">
        {filteredProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            description={item.description}
          />
        ))}
      </div>

      <div className="shopcategory-loadmore">Explore more</div>
    </div>
  );
}

export default ShopCategory;