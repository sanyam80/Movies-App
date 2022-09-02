import React from 'react'
import "./style.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className = "flex border-2">
        <img src = "https://cdn2.iconfinder.com/data/icons/control-button/64/pause-resume-button-interface-512.png" alt = ""></img>
        <Link to = "/"><h2><strong>Movies</strong></h2></Link>
        <Link to =  "/favourite"><h2><strong>Favourites</strong></h2></Link>
    </div>
  )
}

export default Navbar 