const express = require("express");
const loanrequestController = require("../controllers/loanrequestController");
const loanrequestRouter = express.Router();

loanrequestRouter.post("/addLoan", loanrequestController.addLoan);

loanrequestRouter.put("/updateLoan/:id", loanrequestController.updateLoan);
loanrequestRouter.put("/updateLoanStatus/:id",loanrequestController.updateLoanStatus);
loanrequestRouter.get("/getAllLoan", loanrequestController.getAllLoan);

module.exports = loanrequestRouter;
