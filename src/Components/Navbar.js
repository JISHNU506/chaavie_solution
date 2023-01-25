import React, { useState } from 'react'
import './style.css';

export default function Navbar() {
const [mnbtn, setmnbtn] = useState(false)
const [nav,setnav]=useState(false)
const [color, setcolor] = useState(false)

const changecolor=()=>{
  if(window.scrollY>=90){
    setcolor(true)
  }
  else{
    setcolor(false)
  }
}
window.addEventListener("scroll",changecolor)

  

    const Toggle=(e) => {
     
        // console.log(e.target);
        setmnbtn(!mnbtn)
        setnav(!nav)
  
    }

  return (
    <>
     <header id={color?"bgcolor":"nobgcolor"}>
    <a href="" className="brand">Chaavies</a>


    <div className={`menu-btn ${mnbtn?"active":""}`} onClick={(e)=>Toggle(e)} ></div>


    <div className={`navigation ${mnbtn?"active":""}`}>
        <div className="navigation-items">
           
        <a href="/">Home</a> 
        <a href="">About</a>
        <a href="">Servieses</a>
        <a href="">Gallery</a> 
        <a href="/adddata">Contact</a>
        <a href="/loginout">Register/Login</a>
        </div>
    </div>
   </header>
    </>
  )
}
