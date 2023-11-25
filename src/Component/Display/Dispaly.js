import React from 'react';
import Home from "../Home/Home";
import Explore from "../Explore/Explore";
import Destination from "../Destination/Destination";
import Book from "../BookNow/BookNow";
import Test from "../Testonominal/Testonominal";
import Card from "../Card/Card";


function Dispaly() {
  return (
    <div>
      <Home/>
      <Explore/>
      <Card/>
      <Destination/>
      <Book/>
      <Test/>
    </div>
  )
}

export default Dispaly
