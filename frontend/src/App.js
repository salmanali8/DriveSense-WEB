import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Signin from "./Signin";
import Signup from "./Signup";
import AdminSignin from "./AdminSignin";
import Usergmap from "./Usergmap";
import HomePage from "./HomePage";
import Dashboard from "./Dashboard";
import Navbar from "./CustomNavbar";
import ButtonPage from "./ButtonPage";
import FooterComponent from "./FooterComponent";

function App() {
  return (
    <Router>
      <div style={{ paddingBottom: "3rem" }}>
        {" "}
        {/* Add padding to avoid footer overlap */}
        <Navbar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/usergmap" element={<Usergmap />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/adminsignin" element={<AdminSignin />} />
          <Route path="/button" element={<ButtonPage />} />
        </Routes>
         <FooterComponent /> 
      </div>
    </Router>
  );
}

export default App;
