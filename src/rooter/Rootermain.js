import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Item from "./Item";

export default class Rootermain extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/item/1">item1</Link>
            </li>
            <li>
              <Link to="/item/2">item2</Link>
            </li>
            <li>
              <Link to="/item/3">item3</Link>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path="/" exact  element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/item/:id" element={<Item/>} />
        </Routes>

      </Router>
    );
  }
}
