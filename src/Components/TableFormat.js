import React ,{useState} from 'react';
import data from "../iplData";
import "./Table.css";
import logo from "./ipl-logo.png";
import {Link} from "react-router-dom";
import dataimage from "./Dataanalysis.jpg";
import dataimgtwo from "./imagesipl.jpg"

export default function TableFormat() {
    const [ipl, setIpl]=useState([]);
    const change2008 = () => {
     const newData =data.filter((item)=>item.season===2008)
     setIpl(newData);
    }

    const change2009 = () => {
        const newData =data.filter((item)=>item.season===2009)
        setIpl(newData);
       }
    const change2010 = () => {
        const newData =data.filter((item)=>item.season===2010)
        setIpl(newData);
       } 
    const change2011 = () => {
        const newData =data.filter((item)=>item.season===2011)
        setIpl(newData);
       }  
       
    const change2012 = () => {
        const newData =data.filter((item)=>item.season===2012)
        setIpl(newData);
       } 
    const change2013 = () => {
        const newData =data.filter((item)=>item.season===2013)
        setIpl(newData);
       }
       
    const change2014 = () => {
        const newData =data.filter((item)=>item.season===2014)
        setIpl(newData);
       }

    const change2015 = () => {
        const newData =data.filter((item)=>item.season===2015)
        setIpl(newData);
       }

     const change2016 = () => {
        const newData =data.filter((item)=>item.season===2016)
        setIpl(newData);
       }

    const change2017 = () => {
        const newData =data.filter((item)=>item.season===2017)
        setIpl(newData);
       }

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

   <div className="img">
      <img src={dataimage} alt="" />
      <img src={dataimgtwo} alt="" />
     </div>

    <div className="rightSideContainer">
        <div className="selectYear">
    <h3>Select Season (Year) to View the Data </h3>
    </div>
    <div className="year">
     <button onClick={change2008}>2008</button>
     <button onClick={change2009}>2009</button>
     <button onClick={change2010}>2010</button>
     <button onClick={change2011}>2011</button>
     <button onClick={change2012}>2012</button>
     <button onClick={change2013}>2013</button>
     <button onClick={change2014}>2014</button>
     <button onClick={change2015}>2015</button>
     <button onClick={change2016}>2016</button>
     <button onClick={change2017}>2017</button>
    </div>

    <div className="graph">
      <button className="dashboard"><Link to="/overview" style={{textDecoration:"none"}}> Overview </Link></button>
      <button className="dashboard"><Link to="/graph" style={{textDecoration:"none"}}> Graph Analysis</Link></button>
      <button className="dashboard"><Link to="/table" style={{textDecoration:"none"}}> Table Analysis</Link></button>
    </div>
    <div className="table">
       <table>
            <tbody>
                <tr>
                    {/* <th>Year</th> */}
                    <th>Team 1</th>
                    <th>Team 2</th>
                    <th>Winner <br />(Win by Runs)</th>
                    <th>Player Of Match</th>
                    <th>City</th>
                    <th>Winner</th>
                    <th>Stadium</th>
                    <th>Date</th>
                </tr>
                {ipl.map((item, i) => (
                    <tr key={i}>
                        {/* <td>{item.season}</td> */}
                        <td>{item.team1}</td>
                        <td>{item.team2}</td>
                        <td>{item.winner}({item.win_by_runs})</td>
                        <td>{item.player_of_match}</td>
                        <td>{item.city}</td>
                        <td>{item.winner}</td>
                        <td>{item.venue}</td>
                        <td>{item.date}</td>

                    </tr>
                ))}
            </tbody>
        </table> 
    </div>
    </div>  
    </div>   
    <footer>
        <div className="mainFoot">
            Copyright 	&#169; 2022 <span>All Right Reserved</span> <br />
            App Developed by <span><a href="#">Abhimanyu Debata</a></span>
        </div>
    </footer> 
    </>
  )
}
