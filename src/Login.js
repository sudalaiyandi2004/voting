import React from 'react'
import './Ap.css';
import Home from './Home';
import Det from './Det';
import { useNavigate } from 'react-router-dom';
function Login({user,pass,setUser,setPass}) {
    const navigate=useNavigate()
    
    const rty=(e)=>{
        e.preventDefault()
        if(user=="srilakshmi" && pass=="13579"){
            navigate("/det")
        }
    }
    const tyu=()=>{
        navigate("/home")
    }
  return (
    <div className='App'>
    <div className='Apps'> 
    <h1>LOGIN</h1>
    <form onSubmit={rty}>
     <h2>Username
     </h2>
     <input type="text" className='in' placeholder='username' value={user} onChange={(e)=>setUser(e.target.value)}/>
     <h2>Password</h2>
     <input type="password" className='in' placeholder='username' value={pass} onChange={(e)=>setPass(e.target.value)}/>
     <br/>
     <br/>
     <input className='bt' type="submit" value="Login"/>
     </form>
     <br/>
     <button onClick={tyu}>As a customer</button>
     </div>
    </div>
  )
}

export default Login