import React, { useEffect, useState } from "react";
import axios from "axios";
import "./adminHomePage.css";

const AdminHomepage = () => {
  const [loanData, setLoanData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8082/loanrequest/getAllLoan"
      );
      setLoanData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCancel = async (id) => {
    // Implement logic to cancel the loan for the specific user
    console.log(`Cancel loan for user with ID: ${id}`);
  };

  const handleApprove = async (id) => {
    // console.log(id, "id");
    try {
      // Send a request to update the loan status to 'approved'
      const response = await axios.put(
        `http://localhost:8082/loanrequest/updateLoanStatus/${id}`,

        { statuss: "approved" },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log(response.data);
      // Reload data after updating the status
      fetchData();
    } catch (error) {
      console.error("Error updating loan status:", error);
    }
  };

  return (
    <div className="admin">
      <h2 className="adminhome">AdminHomePage</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Amount</th>
            <th>Terms</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loanData.map((loan) => (
            <tr key={loan.id}>
              <td>{loan.id}</td>
              <td>{loan.loanamount}</td>
              <td>{loan.term}</td>
              <td>{loan.statuss}</td>
              <td>
                {/* {loan.statuss === "Pending" && ( */}
                <>
                  <button
                    className="approved-button"
                    onClick={() => handleCancel(loan.userid)}
                  >
                    Cancel
                  </button>
                  <button
                    className="approved-button"
                    onClick={() => handleApprove(loan.id)}
                  >
                    Approved
                  </button>
                </>
                {/* )} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminHomepage;
