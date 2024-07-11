import './NewCollections.css'
import Item from '../Item/Item'
import new_collections from '../../../public/all_product.json'


const NewCollections = () => {




  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="collections">
            {new_collections.map((item, i) =>{
              if(item.id < 10){
                return(
                  <div key={i} className="popular-div">
                  <Item key={i} id={item.id} name={item.name} image ={item.image} new_price = {item.new_price} old_price ={item.old_price} description={item.description}/>
             </div>
              )
              }else{
                return "";
              }

            })}
        </div>
        

    </div>
  )
}

export default NewCollections