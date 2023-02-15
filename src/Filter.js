import React, { useState } from 'react'

export default function Filter() {
    const[filter,setFilter]=useState({
        lowValue:400,
        highValue:1000
    })
    function handleupdate(){
        setFilter(pre =>{
            
            // console.log(pre)
            // pre.lowValue=600;
            // console.log(pre)
            console.log({...pre})
            
            return {...pre ,lowValue:600};
    })
    }

  return (
    <div style={{marginLeft:"40%"}}>
    <h1>Filter</h1>
    <h3>{filter.lowValue} {filter.highValue}</h3>
    <button onClick={handleupdate}>Update</button>
    
    </div>
  )
}
