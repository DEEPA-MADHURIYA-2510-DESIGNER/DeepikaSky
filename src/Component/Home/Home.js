import React from "react";
import "./Home.css";
import raam from "../Images/img6.png";

function Home() {
  return (
    <>
      <div className="main-about">
      <div className='elipse1'>
            <div className='eli1'>
                <div className='eli2'></div>
            </div>
        </div>
        <div className='elipse2'>
            <div className='eli1'>
                <div className='eli2'></div>
            </div>
        </div>
        <div className='circle1'>
            <div className='cir1'>
                <div className='cir2'></div>
            </div>
        </div>
        <div className='circle2'>
            <div className='cir1'>
                <div className='cir2'></div>
            </div>
        </div>
        <div className='quatercircle'>
            <div className='qc1'>
                <div className='qc2'></div>
            </div>
        </div>
        <div className="about">
          <h5>Discover the beauty of the Topics</h5>
          <h1>Tropicals</h1>
          <h1>Destinations</h1>
          <h4>For Sudden</h4>
          <p>
            hello this is main conetent abput our country so please read is
            first than scroll down
          </p>
          <button>Sign Up</button>
        </div>
        <div className="img-page">
          <img src={raam} />
        </div>
      </div>
      <div>
      </div>
    </>
  );
}

export default Home;
