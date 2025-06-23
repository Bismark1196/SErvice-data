import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "./App.css";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup";
import Eligibilitycheck from "./pages/Eligibilitycheck";
import Savings from "./pages/Savings";
import Appdet from "./pages/Appdet";
import Verification from "./pages/Verification";
import Review from "./pages/Review";



export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/appdet" element={<Appdet />} />
          <Route path="/eligibilitycheck" element={<Eligibilitycheck />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </div>
    </Router>
  );
}


