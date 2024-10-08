import React, {useContext} from "react"
import { ShopContext } from "../Context/ShopContext"
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrum/Breadcrum";
import Productdisplay from "../components/Productdisplay/Productdisplay";
import { DescriptionBos } from "../components/DescriptionBox/DescriptionBos";
import RelatedProucts from "../components/RelatedProucts/RelatedProucts";
const Product = () => {

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product}/>
      <Productdisplay product = {product}/>
      <DescriptionBos/>
      <RelatedProucts/>
    </div>
  )
}

export default Product