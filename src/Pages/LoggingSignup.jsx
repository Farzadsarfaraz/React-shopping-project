
import './CSS/LoggingSignup.css'
const LoggingSignup = () => {
  return (
    <div className="loginsignup">
      <div className='loginsignup-container'>
      <h1>Sign UP</h1>
      <div className="loginsignup-field">
        <input type="text" placeholder="Your name"/>
        <input type="email" placeholder="Email Address"/>
        <input type="Password" placeholder="Password"/>
      </div>
      <button>Continue</button>
      <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
      <div className="loginsignup-agree">
        <input type="checkbox" name="" id=""/>
        <p>I agree to terms of use & privacy policy</p>
      </div>  
    </div>
    </div>
  )
}

export default LoggingSignup