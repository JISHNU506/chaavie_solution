import React from 'react'
import './style.css';

export default function Services() {
  return (
 <>
 <div className="service">
  <h1>Our Services</h1>
  <div className="content">
    <div className="card">
        <img src="images/pattern.png" alt="" />
      <div className="box">
      <i class='bx bxs-component'></i>
        <h2>
Digital
Transformation</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aperiam
          culpa tempore fugit doloribus vel?
        </p>
      </div>
    </div>
    <div className="card">
    <img src="images/pattern.png" alt="" />
      <div className="box">
      <i class='bx bx-line-chart' ></i>
        <h2>
Digital <br />
Marketing</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aperiam
          culpa tempore fugit doloribus vel?
        </p>
      </div>
    </div>
    <div className="card">
    <img src="images/pattern.png" alt="" />
      <div className="box">
      <i class='bx bxs-mobile' ></i>
        <h2>
Mobile App Development</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aperiam
          culpa tempore fugit doloribus vel?
        </p>
      </div>
    </div>
    <div className="card">
    <img src="images/pattern.png" alt="" />
      <div className="box">
      <i class='bx bx-globe' ></i>
        <h2>Web
Development</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aperiam
          culpa tempore fugit doloribus vel?
        </p>
      </div>
    </div>
    {/* <div className="card">
    <img src="images/pattern.png" alt="" />
      <div className="box">
        <i className="fa fa-paint-brush" />
        <h2>Web Design</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aperiam
          culpa tempore fugit doloribus vel?
        </p>
      </div>
    </div> */}
  </div>
</div>

 </>
  )
}
