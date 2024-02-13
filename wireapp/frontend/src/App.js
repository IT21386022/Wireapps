import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/style.css'
import Home from "./pages/home";
import MensClothing from "./pages/men.js"
import WomensClothing from './pages/women.js'


export default class App extends Component {
  render() {
    return (
    <BrowserRouter>
    <div className="container">
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/mens-clothing" element={<MensClothing />} />
        <Route path="/womens-clothing" element={<WomensClothing/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    
    )
  }
}
