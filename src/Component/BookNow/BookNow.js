import React from "react";
import "./BookNow.css";
import book from "../Images/img7.png";

function BookNow() {
  return (
    <>
      <div className="book-main">
        <div className='circle1 student3 contact3'>
          <div className='cir1'>
            <div className='cir2'></div>
          </div>
        </div>
        <div className="book-img">
          <img src={book} />
        </div>
        <div className="book-cartt">
          <div className="book-box">
            <div className="head">
              <h1>Book now</h1>
              <h5>Lorem ipsumdolor sit amet, consectetur adipscing elit</h5>
              <div className="inputes">
                <h6>CITY</h6>
                <input type="text" placeholder="Placeholder"></input>

                <div className="boxes">
                  <div className="boxx1">
                    <h6>ARRIVALS</h6>
                    <input type="text" placeholder="10 October"></input>
                  </div>
                  <div className="boxx1 box-margin">
                    <h6>DEPARTURE</h6>
                    <input type="text" placeholder="11 October"></input>
                  </div>
                </div>

                <div className="boxess">
                  <div className="boxxx1">
                    <h6>ARRIVALS</h6>
                    <div className="btn-main-book">
                      <button className="s-btn">-</button>
                      <input type="text" placeholder="4"></input>
                      <button className="add-btn p-btn">+</button>
                    </div>
                  </div>
                  <div className="boxxx1">
                    <h6>DEPARTURE</h6>
                    <div className="btn-main-book">
                      <button className="s-btn">-</button>
                      <input type="text" placeholder="1"></input>
                      <button className="p-btn">+</button>
                    </div>
                  </div>
                </div>
                <div className="main-btn-of-book">
                  <button>Book Now</button>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>

  );
}

export default BookNow;
