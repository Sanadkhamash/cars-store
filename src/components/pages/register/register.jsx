import React, {useRef, useEffect,useState} from 'react'
import "./register.css"
import {useNavigate} from "react-router-dom"

function Register(props) {
    let already = useRef(null)
    let container = useRef(null)
    const navigate = useNavigate();
    let [counter, setCounter] = useState(5)
    if(props.logged&&counter>0)
    setTimeout(()=>{
        setCounter(counter - 1);
    },1000)

    useEffect(() => {
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

    const handleRegister =(e)=>{
        e.preventDefault();
        if(!localStorage.getItem("users"))
        localStorage.setItem('users',JSON.stringify([]))
        let err = false;
        let inputs ={
            fname : e.target.fname.value,
            lname : e.target.lname.value,
            email : e.target.email.value,
            password : e.target.password.value,
        }
        let found;
        const lcl = JSON.parse(localStorage.getItem('users'));
        for(let user of lcl){
            if(inputs.email == user.email)
            found = true;
            err=true;
            break;
        }
        found&&alert("This Email is already in use");

        if(inputs.password !== e.target.repeatpassowrd.value){
            alert("Passwords don't match");
            err=true;
        }

        if(!err){
            lcl.push(inputs);
            localStorage.setItem("users",JSON.stringify(lcl))
            navigate('/login');
        }


    }

    return (
        <div className='regContainer'>
            {props.children}
            <div ref ={container} className="regForm">
                <form onSubmit={handleRegister}>
                    <label htmlFor="fname">
                        <p>First Name:</p>
                        <input placeholder='First Name' type="text" required id="fname" name="fname" />
                    </label>                    
                    <label htmlFor="lname">
                        <p>Last Name:</p>
                        <input placeholder='Last Name' type="text" required id="lname" name="lname" />
                    </label>                    
                    <label htmlFor="email">
                        <p>Email Address:</p>
                        <input placeholder='Email' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$' type="email" required id="email" name="email" />
                    </label>                    
                    <label htmlFor="password">
                        <p>Password:</p>
                        <input placeholder='Password' type="password" required id="password" name="password" />
                    </label>                    
                    <label htmlFor="repeatpassowrd">
                        <p>Repeat Passowrd:</p>
                        <input placeholder='Repeat Password' type="password" required id="repeatpassowrd" name="repeatpassowrd" />
                        <div className="loginBtn">
                         <button className="burnBtn" type="submit" >Register</button>
                        </div>
                    </label>                    
                </form>
            </div>
            <div ref={already} className="already">
             <h1>You are already loggedin</h1>
             <h2>You will be redirected to the shop in {counter} seconds</h2>
            </div>
            
        </div>
    )
}

export default Register
