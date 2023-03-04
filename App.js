import React from 'react'
import "./App.css";
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import MainNav from "./Components/MainNav";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import Series from "./Pages/Series/Series";
import Movies from "./Pages/Movies/Movies";
 

function App() {
  return (
    
    
         <Router>
      <Header />
      <div className="App"> 
 
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <MainNav />
        </div>
      </Router>
   
    
  );
}

export default App;
