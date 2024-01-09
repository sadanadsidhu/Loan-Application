import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import "./updateLoan.css";
const UpdateLoan = () => {
  const location = useLocation();
  const { amount } = location.state || {};

  const [status, setStatus] = useState("Pending");

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  const handlePayNow = () => {
    alert("Payment successful!");
  };

  return (
    <div className="LoanUpdatewrapper">
      <div className="LoanUpdateContainer">
        <div className="loan-status-detailed">
          <h2>Loan Status</h2>
          <div className="loan-status-i">
            <p>Loan Amount: ${amount || 0}</p>
            <p>Status: {status}</p>

            {(status === "Pending" || status === "Approved") && (
              <div>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#ff9800",
                    color: "white",
                    marginRight: "10px",
                  }}
                  onClick={() => handleStatusChange("Pending")}
                >
                  Pending
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#4caf50",
                    color: "white",
                    marginRight: "10px",
                  }}
                  onClick={() => handleStatusChange("Approved")}
                >
                  Approved
                </Button>
              </div>
            )}
            <br />
          </div>
          <Link to="/loanCreation">Go Back to Loan Creation</Link>
        </div>
      </div>
    </div>
  );
};

export default UpdateLoan;
