import './NewCollections.css'
import new_collections from '../assets/new_collections/NewCollections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="collections">
            {new_collections.map((item, i) =>{
                return(
                    <div key={i} className="popular-div">
                    <Item key={i} id={item.id} name={item.name} image ={item.image} new_price = {item.new_price} old_price ={item.old_price} description={item.description}/>
               </div>
                )
            })}
        </div>
        

    </div>
  )
}

export default NewCollections