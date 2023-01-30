import React from 'react'
import './App.css';
import { useNavigate } from 'react-router-dom';
function Home({s,exe,good,setExe,setGood,setSat,Changess,Changes,Change}) {
  const navigate=useNavigate()
    const exec=()=>{
      var e=parseInt(exe.e)+1
        console.log(exe.e)
        Changess({e})
        navigate("/")
      }
      const sats=()=>{
        var sat=parseInt(s.sat)+1
          console.log(s.sat)
          Changes({sat})
          navigate("/")
        }
        const goods=()=>{
          var g=parseInt(good.g)+1
            console.log(good.g)
            Change({g})
            navigate("/")
          }
  return (

    <div className='App'>
    <h1>HOW WAS YOUR EXPERIENCE AT HOTEL ABC</h1>
      <div className='rt'>
        <button onClick={sats} ><img src='download.jpg'/></button>
        <button onClick={goods} ><img src='download.png'/></button>
        <button onClick={exec}><img src='sad.jpg'/></button>
        </div>
    </div>
  )
}

export default Home