import React from 'react'
import Header from './Header';
import Footer from "./Footer"
import "./Table.css";
import {Link} from "react-router-dom";
export default function Home() {
  return (
    <div>

    <Header />
    <div className="graph">
      <button className="dashboard"><Link to="/overview" style={{textDecoration:"none"}}> Overview </Link></button>
      <button className="dashboard"><Link to="/graph" style={{textDecoration:"none"}}> Graph Analysis</Link></button>
      <button className="dashboard"><Link to="/table" style={{textDecoration:"none"}}> Table Analysis</Link></button>
    </div>
    <Footer />
   
    </div>
  )
}
