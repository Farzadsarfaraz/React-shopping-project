import Hero from "../components/Hero/Hero"
import NewCollections from "../components/NewCollections/NewCollections"
import NewsLetter from "../components/NewsLetter/NewsLetter"
import Offer from "../components/Offer/Offer"
import Popular from "../components/Popular/Popular"


const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop