// import React from "react";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupForm from "./forms/signup/SignupForm";
import LoginForm from "./forms/login/LoginForm";
import AdminLogin from "./admin/AdminLogin";
import LoanCreation from "./components/LoanCreation/LoanCreation";
import AdminHomepage from "./admin/AdminHomePage";
import LoanStatus from "./components/loanstatus/LoanStatus";
import LoanCreationForm from "./components/homepage/HomePage";
function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/loancreation"
            element={<LoanCreation toggle={{ toggleCart, isCartOpen }} />}
          />
          <Route
            path="/homepage"
            element={<LoanCreationForm toggle={{ toggleCart }} />}
          />
          <Route path="/loanstatus" element={<LoanStatus />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/" element={<AdminHomepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
