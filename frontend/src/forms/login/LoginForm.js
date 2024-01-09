import React, { useState } from "react";
import "./login.css"
import { useNavigate } from "react-router-dom";
import { LogInAPI } from "../../API/allAPI";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";

function LoginForm() {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });

    const navigate = useNavigate();

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      console.log(`Data type of ${name}:`, typeof value);
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
   console.log(formData,"i am clicked")
      try {
        const response = await LogInAPI(formData);
        if (response.data) {
          navigate("/homepage");
        }
        localStorage.setItem("userid", response.data.userid);
        console.log('respo',response.data)
        localStorage.setItem("username", response.data.username);
      } catch (error) {
        // Handle errors, e.g., display an error message
        console.error("Login failed:", error);
      }
    };

  return (
    <div className="login">
      <div className="card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            size="small"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            size="small"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {/* <Link to="/homepage"> */}
          <Button variant="contained" type="submit">
            Log In
          </Button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
