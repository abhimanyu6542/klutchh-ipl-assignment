import React from 'react'
import "./Table.css";
import logo from "./ipl-logo.png";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <>
   <div className="mainContainer">
     <div className="navbar">
       <div className="logo">
        <Link id="logo" to="/">
        <img src={logo} className="App-logo" alt="logo" />
        </Link>
   </div>
   <div className="menu">
       <button className="dashboard"><Link to="/" style={{textDecoration:"none"}}> Home</Link></button>
         <button className="dashboard"><Link to="/Profile" style={{textDecoration:"none"}}> Profile </Link></button>
         <button className="dashboard"><Link to="/refer" style={{textDecoration:"none"}}> Refer</Link></button>
   </div>
   </div>
   </div>
    </>
  )
}
