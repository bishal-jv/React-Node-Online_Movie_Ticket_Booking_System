import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Login,
  Register,
  Home,
  Addmovie,
  Listuser,
  Listmovie,
  Bookticket,
  Bookinghistory,
  Eticket,
} from "./components";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/addmovie" element={<Addmovie />} />
      <Route path="/listmovie" element={<Listmovie />} />
      <Route path="/listuser" element={<Listuser />} />
      <Route path="/bookticket" element={<Bookticket />} />
      <Route path="/bookinghistory" element={<Bookinghistory />} />
      <Route path="/eticket" element={<Eticket />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
