import Axios from 'axios'
import React, { useEffect,useState } from 'react'

function GetAxios() {
    let [Apidata,setData]=useState([])


    useEffect(()=>{
        Axios.get("https://63e75eaaac3920ad5bdce762.mockapi.io/Crud").then((item)=>{
            console.log(item.data);
            setData(item.data)

        })
    },[])
    

    // useEffect(()=>{
    //     fetch("https://dummyjson.com/products").then((res)=>{
    //         res.json().then((result)=>{
                
                
    //             console.log(result.products)
    //             setData(result.products)
    //         })
    //     })
    // },[])
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
{Apidata.map((item,i)=>{
    return(
        <div key={i} style={{textAlign:"center",background:"lightgreen",padding:"20px"}}>
        
            <h1>{item.name}</h1>
            <h3>{item.email}</h3>
            <h5>{item.age}</h5>
            {/* <img style={{objectFit:"cover",width:"60%"}} src={item.images[0]}></img>
            <h2>{item.price}</h2> */}

           
        </div>
    )
})}
        
    </div>
  )
}

export default GetAxios