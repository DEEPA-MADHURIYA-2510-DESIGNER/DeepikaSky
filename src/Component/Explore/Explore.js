import React from 'react';
import "./Explore.css";
import img1 from "../Images/img4.png";
import img2 from "../Images/img4.png";
import img3 from "../Images/img4.png";

function Explore() {
  return (
    <>
      <div className='explore-main'>
        <div className='elipse2 explore2'>
          <div className='eli1'>
            <div className='eli2'></div>
          </div>
        </div>
        <div className='circle01'>
          <div className='cir01'>
            <div className='cir02'></div>
          </div>
        </div>
        <div className='div-page'>
          <div className='div1'>
            <img src={img1} />
            <div className='name-div'>
              <h5>Jenny wilsom</h5>
              <p>hey its me tell me something about you its good day today</p>
            </div>
          </div>
          <div className='div1'>
            <img src={img2} />
            <div className='name-div'>
              <h5>Jenny wilsom</h5>
              <p>hey its me tell me something about you its good day today</p>
            </div></div>
          <div className='div1'>
            <img src={img3} />
            <div className='name-div'>
              <h5>Jenny wilsom</h5>
              <p>hey its me tell me something about you its good day today</p>
            </div>
          </div>
        </div>


        <div className='trop-main-div'>
          <h1>Tropical Adventure</h1>
          <h3>for Students.</h3>
          <h4>Student Tropical Vacation: Relax and Recharge</h4>
          <div className='trop-list1'>
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

      </div>
    </>
  )
}

export default Explore