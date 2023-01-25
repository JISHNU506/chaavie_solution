import React, { useEffect, useState } from 'react'
import './style.css';
import adv from "../videos/adv.mp4";
import vid2 from "../videos/vid2.mp4";
import vid4 from "../videos/vid4.mp4";
import vid5 from "../videos/vid5.mp4";

export default function WelcomePage() {
  const [activate, setactivate] = useState(0)
  
const [sliderchange, setsliderchange] = useState("nav-btn")
  const btns = document.querySelectorAll(".nav-btn");
 
  const slides = document.querySelectorAll(".video-slide");
  const contents = document.querySelectorAll(".content");
  console.log(btns);


useEffect(() => {
  console.log(btns);
  var sliderNav = function(manual){
    btns.forEach((btn) => {
      console.log(btns);
      btn.classList.remove("active");
    });

    slides.forEach((slide) => {
     
      slide.classList.remove("active");
    });

    contents.forEach((content) => {
      
      content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
  }
  
  btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      sliderNav(i);
    });
  });
},[sliderchange])

 






  return (
  <>
    <section className="home">
    <video src={vid5} class="video-slide active" autoPlay loop muted></video>
    <video src={adv} class="video-slide" autoPlay loop muted></video>
    <video src={vid4} class="video-slide" autoPlay loop muted></video>

  



    
    <div className="media-icons">
        <a href=""><i class='bx bxl-facebook'></i></a>
        <a href=""><i class='bx bxl-instagram'></i></a>
        <a href=""><i class='bx bxl-twitter'></i></a>
    </div>
      <div class="slider-navigation">
        <div onClick={()=>{setsliderchange(!sliderchange);setactivate(0)}} class="nav-btn active"></div>
        <div onClick={()=>{setsliderchange(!sliderchange);setactivate(1)}} class="nav-btn"></div>
        <div onClick={()=>{setsliderchange(!sliderchange);setactivate(2)}} class="nav-btn"></div>

      </div>
  </section>
 
  
  </>
  )
}
