import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive offers on your Email</h1>
        <h1>Subscribe to our NewsLetter and stay updated</h1>
        <div>
            <input type='email' placeholder='Enter Your Email'/>
            <button>Subscribe</button>

        </div>
    </div>
  )
}

export default NewsLetter