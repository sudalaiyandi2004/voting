import logo from './logo.svg';
import Login from './Login';
import Home from './Home';
import Det from './Det';
import { useState,useEffect } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  const[good,setGood]=useState("0")
  const[exe,setExe]=useState([])
  const[s,setSat]=useState([])
  const[user,setUser]=useState("")
  const[pass,setPass]=useState("")
  useEffect(()=>{
    const fetchTask=async()=>{
        const res=await fetch("http://localhost:3004/exe")
        const data= await res.json()
        setExe(data)
    }
    fetchTask() 
  },[])
  useEffect(()=>{
    const fetchTask=async()=>{
        const res=await fetch("http://localhost:3004/s")
        const data= await res.json()
        
        setSat(data)
    }
    fetchTask() 
  },[])
  useEffect(()=>{
    const fetchTask=async()=>{
        const res=await fetch("http://localhost:3004/good")
        const data= await res.json()
        
        setGood(data)
    }
    fetchTask() 
  },[])
  const Changess=async(rat)=>{
    const ress=await fetch("http://localhost:3004/exe",{
      method:'PUT',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(rat)
    })
    const ra=await ress.json()
    
    setExe(ra)

  }
  const Change=async(rat)=>{
    const ress=await fetch("http://localhost:3004/good",{
      method:'PUT',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(rat)
    })
    const ra=await ress.json()
    
    setGood(ra)

  }
  const Changes=async(rat)=>{
    const ress=await fetch("http://localhost:3004/s",{
      method:'PUT',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(rat)
    })
    const ra=await ress.json()
    
    setSat(ra)

  }

  
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<Login user={user} pass={pass} setUser={setUser} setPass={setPass}/>}/>
        <Route path='/home' element={<Home good={good} setGood={setGood} s={s} setSat={setSat} exe={exe} setExe={setExe} Changess={Changess} Changes={Changes} Change={Change}/>}/>
        <Route path='/det' element={<Det good={good} setGood={setGood} s={s} setSat={setSat} exe={exe} setExe={setExe} Changess={Changess} Changes={Changes}
        />}/>
      </Routes>
      </div>
      </Router>
  );
}

export default App;
