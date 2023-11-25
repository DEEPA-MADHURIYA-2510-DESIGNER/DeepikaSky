import React, {useState} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FiAlignJustify } from "react-icons/fi";
import { ImCross } from "react-icons/im";

function Navbar() {
  const [display, SetDisplay] = useState(false)

  function showDisplay() {
    SetDisplay(!display)
  }

  function hideDisplay() {
    SetDisplay(!display)
  }

  const showbarStyle = {
    transition: 'transform 0.3s ease-in-out',
    transform: display ? 'translateX(0)' : 'translateX(-415px)',
  };
  return (
    <div className='navbar'>
     <button className='icon1' onClick={() => { showDisplay() }}><FiAlignJustify/></button>
        <div className='nav1' style={showbarStyle}>
        <button className='icon1 btn-bar btn-cross' onClick={() => { hideDisplay() }}>
            <ImCross />
          </button>
        <ul>
            <li><Link className='row'>Home</Link></li>
            <li><Link className='row'>About</Link></li>
            <li><Link className='row'>Schedule</Link></li>
            <li><Link className='row'>Membar</Link></li>
            <li><Link className='row'>Pricing</Link></li>
            </ul> 
        </div>
        <div className='nav2'>
        <ul>
        <li><Link className='row'>Offers</Link></li>
        <li><Link className='btn'><button>Courses</button></Link></li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar