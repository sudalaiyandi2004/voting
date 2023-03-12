import React, { useState } from 'react'
import './App.css';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
function Home({s,exe,good,setExe,setGood,setSat,Changess,Changes,Change}) {
  const navigate=useNavigate()
  const [nam,setNam]=useState("")
    const exec=()=>{
      var e=parseInt(exe.e)+1
        console.log(exe.e)
        Changess({e})
        setNam("Thanks For Your Feedback")
        navigate("/")
      }
      const sats=()=>{
        var sat=parseInt(s.sat)+1
          console.log(s.sat)
          Changes({sat})
          setNam("Thanks For Your Feedback")
          navigate("/")
        }
        const goods=()=>{
          var g=parseInt(good.g)+1
            console.log(good.g)
            Change({g})
            setNam("Thanks For Your Feedback")
            navigate("/")
          }
        const clic=()=>{
            navigate('/login')
          }
  return (

    <div className='App'>
      <div className='lo'>
      <img className='slbb' src='slbb.png'/>
    <button className='login' onClick={clic}>LOGIN</button></div>
    <h2 className='head'>HOW WAS YOUR EXPERIENCE AT HOTEL SHREE LAKSHMI BHAVAN</h2>
      <div className='rt'>
        <button onClick={sats} ><img src='download.jpg'/></button>
        <button onClick={goods} ><img src='download.png'/></button>
        <button onClick={exec}><img src='sad.jpg'/></button>
        </div>
        <h2 className='iop'>{nam}</h2>
    </div>
  )
}

export default Home