import React, { useState } from "react";
import Button from "@mui/material/Button";
import { LoanCreationAPI } from "../../API/allAPI";
import { useNavigate } from "react-router-dom";
import "./homepage.css";
const LoanCreationForm = () => {
  const [formData, setFormData] = useState({
    userid: "2",
    loanamount: "",
    term: "",
    statuss: "pending",
  });
  console.log(typeof formData.loanamount);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]:
        name === "loanamount" || name === "term" ? parseInt(value, 10) : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await LoanCreationAPI(formData);
      if (response.data) {
        navigate("/loanstatus");
      }

      // Reset the form fields after successful submission
      setFormData({
        userid: "",
        loanamount: "",
        term: "",
        statuss: "",
      });
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className="wrapper">
      <div className="main">
        <div>
          <h2>Loan Creation</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Amount:
              <select
                id="dropdown"
                className="input"
                name="loanamount"
                value={formData.loanamount}
                onChange={handleInputChange}
              >
                <option value={1}>Select Amount</option>
                <option value={10000}>10,000</option>
                <option value={20000}>20,000</option>
                <option value={30000}>50,000</option>
              </select>
            </label>
            <br />
            <label>
              Term (in weeks):
              <select
                id="dropdown"
                className="input"
                name="term"
                value={formData.term}
                onChange={handleInputChange}
              >
                <option value={1}>Select Week </option>
                <option value={1}>1 week</option>
                <option value={2}>2 weeks</option>
                <option value={3}>3 weeks</option>
              </select>
            </label>
            <br />
            <Button
              variant="contained"
              type="submit"
              style={{
                backgroundColor: "#4caf50",
                color: "white",
                padding: "10px 15px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Request Loan
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoanCreationForm;
