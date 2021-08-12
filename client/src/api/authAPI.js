import axios from 'axios';

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("http://localhost:5000/auth/login", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error });
  }
};

export const fetchFreelancers = () => axios.get("http://localhost:5000/freelancers"); 