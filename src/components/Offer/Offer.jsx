import './Offer.css'
import exclusiveImage from './../assets/pic12.png'

const Offer = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>EXCLUSIVE</h1>
            <h1>OFFERS FOR YOU</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>

        </div>
        <div className="offers-right">
            <img src={exclusiveImage} alt='' width='350px'/>
        </div>
    </div>
  )
}

export default Offer