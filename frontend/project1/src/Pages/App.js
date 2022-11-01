import React, { useState, useEffect } from "react";
// import  from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import History from "../Components/History";
import Home from "../Components/Home";
import Navbar from "../Components/Navbar";
import "../Assets/css/App.css";

function App() {
  const [datas, setDatas] = useState("");

  useEffect(() => {
    fetch("http://localhost:8005/v1/allSaldo")
      .then((res) => res.json())
      .then((res) => setDatas(res.data[0]));
  }, [setDatas]);
  return (
    <Router>
      <div className="navbar">
        <h1>GENBOX PULSA</h1>
      </div>
      <div className="container">
        <div className="d-flex">
          {/* <button> */}
          <Link to="/" className="btn btn-input">
            Input
          </Link>
          {/* </button> */}
          {/* <button className="btn"> */}
          <Link to="/History" className="btn btn-riwayat">
            Riwayat
          </Link>
          {/* </button> */}
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home saldo={datas} />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/History" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
