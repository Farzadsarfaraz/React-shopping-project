import { createContext } from "react";
import NewCollectionsjson from '../../public/new_collections.json'


export const ShopContext1 = createContext(null);

const ShopContextProvider1 =(props)=>{

    const contextValue1 = {NewCollectionsjson};

    return(
        <ShopContext1.Provider value={contextValue1}>
            {props.children}
        </ShopContext1.Provider>
    )

}
export default ShopContextProvider1