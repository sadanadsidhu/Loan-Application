const db = require("../models");

//create main Model
const Loanrequest = db.loanrequest;

const addLoan = async (req, res) => {
  let info = {
    userid: req.body.userid,
    loanamount: req.body.loanamount,
    term: req.body.term,
    statuss: req.body.statuss,
  };

  const loancreate = await Loanrequest.create(info);
  res.status(200).send(loancreate);
};

//// update loan----------------------
const updateLoan = async (req, res) => {
  const loanId = req.params.id; // assuming you pass the loan ID in the URL

  try {
    const loanToUpdate = await Loanrequest.findByPk(loanId);

    if (!loanToUpdate) {
      return res.status(404).json({ message: "Loan not found" });
    }

    // Update loan properties
    loanToUpdate.userid = req.body.userid;
    loanToUpdate.loanamount = req.body.loanamount;
    loanToUpdate.term = req.body.term;
    loanToUpdate.statuss = req.body.statuss;

    // Save the updated loan
    await loanToUpdate.save();

    res
      .status(200)
      .json({ message: "Loan update successful", data: loanToUpdate });
  } catch (error) {
    console.error("Error during loan update:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
//////upadte loan status
// Function to update loan status
const updateLoanStatus = async (req, res) => {
  const {id}=req.params;
  const { statuss } = req.body;

  try {
    const loan = await Loanrequest.findOne({ where: { id } });

    if (!loan) {
      return res.status(404).json({ message: "Loan not found" });
    }

    // Update the statuss field
    loan.statuss = statuss; // difference between loan.status and statuss

    await loan.save();

    res.status(200).json({ message: "Loan status updated successfully" });
  } catch (error) {
    console.error("Error updating loan status:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
/////////////////////////----------get all loans------------------------------------------------------------------------
const getAllLoan = async (req, res) => {
  let loanrequest = await Loanrequest.findAll();
  res.status(200).send(loanrequest);
};
module.exports = {
  addLoan,
  updateLoan,
  updateLoanStatus,
  getAllLoan,
};
