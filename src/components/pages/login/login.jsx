import react from 'react'
import React, {useState, useEffect, useRef} from 'react'
import {useNavigate, Link} from "react-router-dom"
import "./login.css"

function Login(props) {

  let container = useRef(null)
  let already = useRef(null)
  let [counter, setCounter] = useState(5)

  if(props.logged&&counter>0)
  setTimeout(()=>{
      setCounter(counter - 1);
  },1000)

 useEffect(
   () => {
    let timer
    if(props.logged)
      {container.current.style.display ="none"
      already.current.style.display ="flex"
      timer = setTimeout(()=>{
        navigate('/shop')
    }, 5000)
    }else{
      container.current.style.display ="flex"
      already.current.style.display ="none"
    }
  return() =>{clearTimeout(timer)}
 }, [props.logged])



  let navigate = useNavigate()

  const handleLogin =(e)=>{
    e.preventDefault()
    const lclData = JSON.parse(localStorage.getItem("users"));
    let found = false;
    let foundIndex;
    const inputs ={
      Email:e.target.email.value,
      password:e.target.password.value,
    }

    for(let index in lclData){
      if (lclData[index].email == inputs.Email){
        found = true;
        foundIndex = index;        
      }
    }
    !found&&alert("No such email found")

    if(found){
      if(lclData[foundIndex].password == inputs.password){
        lclData[foundIndex].index = foundIndex;
        localStorage.setItem("loggedUser",JSON.stringify(lclData[foundIndex]));
        props.setLogged(true);
        navigate("/")
      }
      else{
        alert("Your Email or password is incorrect");
      }
    }

  }

  return (
    <react.Fragment>
      {props.children}
    <div ref={container} className='loginContainer'>
      <form onSubmit={handleLogin}>
        <div className="inputField">
          <label htmlFor="email">
            <p>Email:</p>
          <input required pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$' type="email" name="email" id="email" placeholder='Enter Your Email' />
          </label>
        </div>
        <div className="inputField">
          <label htmlFor="password">
            <p>Password:</p>
          <input required type="password" name="password" id="password" placeholder='Enter Your password' />
          </label>
        </div>
        <div className="loginBtn">
          <button  className='burnBtn' type="submit">Login</button>
        </div>
      </form>
      
    </div>
    <div ref={already} className="already">
      <h1>You are already loggedin</h1>
      <h2>You will be redirected to the shop in {counter} seconds</h2>
    </div>
    </react.Fragment>
  )
}

export default Login
