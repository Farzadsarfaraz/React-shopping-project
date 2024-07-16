import "./Popular.css";
import data_product from "./../../../public/all_product.json";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="popular">
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
      <div className="popular-item">
        {data_product.map((item, i) =>{
          if(item.id < 15 && item.id > 10){
            return(
              <div key={i} className="popular-div">
                   <Item key={i} id={item.id} name={item.name} image ={item.image} new_price = {item.new_price} old_price ={item.old_price} description={item.description}/>
              </div>
          )
          }else{
            return ''
          }

        })}
      </div>
    </div>
  );
};

export default Popular;