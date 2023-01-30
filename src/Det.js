import React from 'react'
import './det.css';
function Det({s,exe,good,setExe,setGood,setSat}) {
  return (
    <div className='App'>
        <h1>RATING STATISTICS</h1>
        
        <h2>GOOD</h2>
        <h3>{exe.e}</h3>
      
        <h2>SATISFACTORY</h2>
        <h3>{s.sat}</h3>
        <h2>SAD</h2>
        <h3>{good.g}</h3>
    </div>
  )
}

export default Det