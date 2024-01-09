import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import "./loanstatus.css";

const LoanStatus = () => {
  const location = useLocation();
  const { amount } = location.state || {};

  const [status, setStatus] = useState("pending");
  const [loanAmount, setLoanAmount] = useState();
  const [loanDate, setLoanDate] = useState("");
  const [tenure, setTenure] = useState();
  useEffect(() => {
    const date = new Date();
    setLoanAmount(50000);
    setLoanDate(date);
    setTenure(3);
  }, []);
  const installmentAmount = loanAmount / tenure;
  const installments = Array.from({ length: tenure }, (_, index) => ({
    month: index + 1,
    amount: installmentAmount.toFixed(2),
  }));
  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  const handlePayNow = () => {
    alert("Payment successful!");
  };

  return (
    <div className="LoanStatuswrapper">
      <div className="LoanStausContainer">
        <div className="loan-status-detailed">
          <h2 className="loan-st">Loan Status</h2>
          <div className="loan-status-i">
            <p className="loan-am">Loan Amount: {amount || 50000}</p>
            <p className="loan-am">Status: {status}</p>

            <br />
          </div>
          <table className="status-table">
            <thead>
              <tr className="tr-staus">
                <th>No</th>
                {/* <th>Date</th> */}
                <th>Amount to be paid</th>
                <th></th>
              </tr>
            </thead>

            <tbody className="th-body">
              {installments.map((datas) => (
                <tr key={datas.month}>
                  <td>{datas.month}</td>
                  {/* <td>loanDate</td> */}
                  <td>{datas.amount}</td>
                  <td>
                    {status === "approved" && (
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "#2196f3",
                          color: "white",
                          marginTop: "10px",
                        }}
                        onClick={handlePayNow}
                      >
                        Pay Now
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link className="go-back" to="/loanCreation">
            Go Back to Loan Creation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoanStatus;
