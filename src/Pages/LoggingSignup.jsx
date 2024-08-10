
import { useState } from 'react'
import './CSS/LoggingSignup.css'
import { json } from 'react-router-dom'
const LoggingSignup = () => {

const[state, setState] = useState("Sign Up")
const [formatData, setFormatData] = useState({
  username:"",
  password: "",
  email:""
})
const changeHandler =(e)=>{
  setFormatData({...formatData, [e.target.name]:e.target.value})

}

const login = async() =>{
  console.log(formatData)
  let responseData;
  await fetch('http://localhost:4000/login',{
    method:'POST',
    headers:{
      Accept:'application/form-data',
      'Content-type':'application/json',
    },
    body: JSON.stringify(formatData),
  }).then((Response)=>Response.json()).then((data)=>responseData = data)
  if(responseData.success){
    localStorage.setItem('auth-token', responseData.token);
    window.location.replace("/")
  }else{
    alert(responseData.errors)
  }
}
const signup = async() =>{
  console.log(formatData)

  let responseData;
  await fetch('http://localhost:4000/signup',{
    method:'POST',
    headers:{
      Accept:'application/form-data',
      'Content-type':'application/json',
    },
    body: JSON.stringify(formatData),
  }).then((Response)=>Response.json()).then((data)=>responseData = data)
  if(responseData.success){
    localStorage.setItem('auth-token', responseData.token);
    window.location.replace("/")
  }else{
    alert(responseData.errors)
  }
}

  return (
    <div className="loginsignup">
      <div className='loginsignup-container'>
      <h1>{state}</h1>
      <div className="loginsignup-field">
        
        {state==="Sign Up"? <input name='username' value={formatData.username} type="text" onChange={changeHandler} placeholder="Your name"/>:<></>}
        <input name='email' value={formatData.email} onChange={changeHandler} type="email" placeholder="Email Address"/>
        <input name='password' value={formatData.password} onChange={changeHandler} type="Password" placeholder="Password"/>
      </div>
      <button onClick={() =>{state ==="login"? login(): signup()}}>Continue</button>
      {state === "Sign Up"?<p className="loginsignup-login">Already have an account? <span onClick={() =>setState("Login")}>Login here</span></p>: <p className="loginsignup-login">Create an account <span onClick={()=>setState("Sign Up")}>Click here</span></p> }
      <div className="loginsignup-agree">
        <label name =""><p> <input type="checkbox" name="" id=""/> I agree to terms of use & privacy policy</p></label>
      </div>  
    </div>
    </div>
  )
}

export default LoggingSignup