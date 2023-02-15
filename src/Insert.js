import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import './insert.css'

function Insert() {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[age,setAge]=useState("");
    const[apidata,setApidata]=useState([])

    
    
    useEffect(()=>{
        axios.get("https://63e75eaaac3920ad5bdce762.mockapi.io/Crud").then((res)=>{
            // console.log(res.data[0].name)
            setApidata(res.data)
    
        })
    
       },[])
    
    const handleAdd=(event)=>{
        event.preventDefault()
        axios.post("https://63e75eaaac3920ad5bdce762.mockapi.io/Crud",{
        name,
        email,
        age
    }).then((res)=>{
        
        

    }).catch((err)=>{
        console.log(err)

    });
        
}



 
    

 
 


  
    
  return (
    <div style={{marginLeft:"40%"}}>
    <form onSubmit={handleAdd} style={{display:"grid",gridTemplateColumns:"200px",gap:"10px"}}>
    <input type="text" placeholder='Name' onChange={(e)=>{setName(e.target.value)}}></input>
    <input type="email" placeholder='Email'onChange={(e)=>{setEmail(e.target.value)}}></input>
    <input type="number" placeholder='age' onChange={(e)=>{setAge(e.target.value)}}></input>
    <input type="submit" value="Add"></input>
    </form>
    <div style={{marginTop:"20px"}}>
        <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            </tr>
            </thead>
            <tbody>
        {/* {console.log(apidata[0].name)} */}
        
        { apidata.map((item ,i)=>{
            return(
            
            <tr key={i}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.age}</td>

                {/* <td><button onClick={showResult}>result</button></td> */}
            </tr>)})}

            </tbody>
        </table>
    </div>
    

   </div>
  )
}

export default Insert