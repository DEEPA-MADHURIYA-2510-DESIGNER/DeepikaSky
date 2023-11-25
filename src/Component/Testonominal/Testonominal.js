import React from "react";
import "./Testonominal.css";
import raam from '../Images/img8.png'

function Testonominal() {
  return (
    <>
    <div className="TestonominalContainer">
      <div className="test-head">
        <h1>Testimonials</h1>
      </div>
      <div className="test-head-div">
        <div className="head-div">
            <img src={raam}/>
            <button>hailayna</button>
            <p>hey its me hailayna its good to nice to see you on this beacause this is very good website to shoop</p>
        </div>
        <div className="head-div">
        <img src={raam}/>
            <button>hailayna</button>
            <p>hey its me hailayna its good to nice to see you on this beacause this is very good website to shoop</p>
        </div>
        <div className="head-div">
        <img src={raam}/>
            <button>hailayna</button>
            <p>hey its me hailayna its good to nice to see you on this beacause this is very good website to shoop</p>
        </div>
      </div>
      </div>
    </>
  );
}

export default Testonominal;
