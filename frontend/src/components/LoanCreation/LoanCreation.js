import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./loanCreation.css";
import Popup from "../popups/Popup";
import LoanCreationForm from "../homepage/HomePage";
import LoanStatusPopup from "../popups/LoanStatusPopup";
import LoanStatus from "../loanstatus/LoanStatus";
// import LoanStaus from "../loanStatus/LoanStaus";
export default function LoanCreation({ toggle }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoanStatusOpen, setIsStatusOpen] = useState(false);
  const handletoggle = () => {
    toggle.toggleCart();
  };

  const toggleLoanStatus = () => {
    setIsStatusOpen(!isLoanStatusOpen);
  };

  return (
    <div>
      <div className="LoanCreationwrapper">
        <div className="LoanCreationContainer">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#4caf50",
              color: "white",
              padding: "10px 15px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
            onClick={handletoggle}
          >
            Loan Creation
          </Button>

          {toggle.isCartOpen && (
            <Popup>
              <LoanCreationForm />
            </Popup>
          )}
          {isLoanStatusOpen && (
            <LoanStatusPopup>
              <LoanStatus />
            </LoanStatusPopup>
          )}
        </div>
      </div>
    </div>
  );
}
