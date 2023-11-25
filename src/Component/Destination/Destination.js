import React from 'react';
import './Destination.css';
import des from "../Images/img5.png";

function Destination() {
  return (
    <>
      <div className='Destination-div'>
        <div className='elipse1 student1'>
          <div className='eli1'>
            <div className='eli2'></div>
          </div>
        </div>
        <div className='elipse2 student2'>
          <div className='eli1'>
            <div className='eli2'></div>
          </div>
        </div>
        <div className='circle1 student3'>
          <div className='cir1'>
            <div className='cir2'></div>
          </div>
        </div>
        <div className='circle2 student4'>
          <div className='cir1'>
            <div className='cir2'></div>
          </div>
        </div>
        <div className='quatercircle student5'>
          <div className='qc1'>
            <div className='qc2'></div>
          </div>
        </div>
        <div className='trop-main'>
          <h4>Get 20% off for Student</h4>
          <h1>Student discount available</h1>
          <h3>Get ready for some fun in the sun!</h3>
          <div className='tropp-list1'>
            <ul>
              <li>Lorem ipsum dotor sit amat</li>
              <li>Lorem ipsum dotor sit amat</li>
              <li>Lorem ipsum dotor sit amat</li>
              <li>Lorem ipsum dotor sit amat</li>
              <li>Lorem ipsum dotor sit amat</li>
            </ul>
          </div>
          <button>Explore More</button>
        </div>
        <div className='des-img'>
          <img src={des} />
        </div>


      </div>
    </>
  )
}

export default Destination