import React, { useState } from 'react'


export default function Dropdown() {
    const [country,setCountry]=useState([{
        name:"India",value:"IN",cities:["Mumbai","Delhi"]},
        {name:"Pakistan",value:"PK",cities:["Karachi","Lohare"]},
        {name:"BG",value:"bg",cities:["Kara","Loha"]}
    ]);
    
  return (
    <>
    <div>
    <select value={country} onChange={(e)=>
    console.log(e.target.value)}>
    {country.map((elm,i)=>{
        return(
            <option key={i}>{elm.name}</option>
        )})}
</select>
    </div>

<select value={country}>
    {country[country].cities.map((elm,i)=>{
        return(
            <option key={i}>{elm}</option>
            )})}
</select>

    </>
  )
}
