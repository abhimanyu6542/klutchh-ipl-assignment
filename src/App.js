import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import TableFormat from './Components/TableFormat';
import Refer from "./Components/Refer";
import Overview from "./Components/OverView";
import Profile from "./Components/Profile";
import Graph from "./Components/GraphFormat";

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/refer" element={<Refer />} />
        <Route path="/graph" element={<Graph />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/table" element={<TableFormat />} />
        <Route path="/" element={<Overview />} />
      </Routes>
      </BrowserRouter>  
   </>  
  );
}

export default App;