import React from 'react';
import {Link} from "react-router-dom";

import Header from './Header';
import Footer from "./Footer";
import Chart from "./Chart";
import "./Table.css"
import Donut from './DonutChart';
import ChartOne from './ChartOne';
import HostedCity from './HostedCity';

export default function GraphFormat() {
  return (
    <>
      <Header />
     <h1 className="heading">Graph View Of IPL Data</h1>
      <div className="analysis">
        <div className="chartjs">
      <Chart />
      </div>
      <div className="chartjs">
       <Donut />
       </div>
       <div className="chartjs">
       <ChartOne />
       </div>
       <div className="chartjs">
       <HostedCity />
       </div>
        <div>
   
       </div>
      </div>
      <div className="graph">
      <button className="dashboard"><Link to="/overview" style={{textDecoration:"none"}}> Overview </Link></button>
      <button className="dashboard"><Link to="/table" style={{textDecoration:"none"}}> Table Analysis</Link></button>
    </div>
    

    <Footer />
   
   </>
  )
}
