import React from "react";
// import LoanStaus from '../loanStatus/LoanStaus'
import "../popups/loanStatusPopup.css";
import LoanStatus from "../loanstatus/LoanStatus";

export default function LoanStatusPopup() {
  return (
    <div>
      <div className="loanStatusPopup">
        <div className="loanStatusPopupContnet">
          <LoanStatus />
        </div>
      </div>
    </div>
  );
}
