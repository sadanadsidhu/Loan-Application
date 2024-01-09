import axios from "axios";

///////////////////----------------------------------------SignUp API --------------------------------------------------------------------------
export const SignUpAPI = async (formData) => {
  // console.log(formData,"formDAta")
  try {
    
    const response = await axios.post(
      "http://localhost:8082/auth/signup",
      formData
    );
    return response;
  } catch (error) {
    // Handle errors, e.g., display an error message
    console.error("Error sending data:", error);
  }
};
////////--------------------------------------------------LOgin API---------------------------------------------------------------------
export const LogInAPI = async (formData) => {
  try {
    // Send the form data to your API endpoint using Axios
    const response = await axios.post(
      "http://localhost:8082/auth/login",
      formData
    );
    return response;
  } catch (error) {
    // Handle errors, e.g., display an error message
    console.error("Error sending data:", error);
  }
};
//////--------------------------------------Loan craetion api
export const LoanCreationAPI = async (formData) => {
  console.log(formData,"formDAta")
  try {
    // Send the form data to your API endpoint using Axios
    const response = await axios.post(
      "http://localhost:8082/loanrequest/addLoan",
      formData
    );
    return response;
  } catch (error) {
    // Handle errors, e.g., display an error message
    console.error("Error sending data:", error);
  }
};