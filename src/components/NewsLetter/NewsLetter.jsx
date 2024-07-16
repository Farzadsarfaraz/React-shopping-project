import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive offers on your Email</h1>
        <p>Subscribe to our NewsLetter and stay updated</p>
        <div>
            <input type='email' placeholder='Enter Your Email'/>
            <button className='button'>Subscribe</button>

        </div>
    </div>
  )
}

export default NewsLetter