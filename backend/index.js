const express = require("express");
const cors = require("cors");
const app = express();

var corOptions = {
  origin: "http://localhost:3000",
};

//middleware
app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//routers

const authRoutes = require("./routes/authRouter.js");
app.use("/auth", authRoutes);


const loanrequestRouter = require("./routes/loanrequestRouter.js");
app.use("/loanrequest", loanrequestRouter);





// error
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  return res.status(err.statusCode).json({
    status: "Failed",
    statusCode: err.statusCode,
    message: err.message,
    stack: err.stack,
  });
});

// port
const PORT = 8082;

//server

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});