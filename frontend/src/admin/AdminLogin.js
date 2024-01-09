import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { LogInAPI } from "../../API/allAPI";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function AdminLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (
    <div className="login">
      <div className="card">
        <h2>Admin Login</h2>
        <form>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            size="small"
            name="email"
       
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            size="small"
            name="password"
          
          />
          <Link to="/AdminHomePage">
            <Button variant="contained" type="submit">
              Log In
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
