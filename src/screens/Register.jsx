import {
  Button,
  Card,
  Container,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../providers/auth/authSlice";
import { toast } from "react-toastify";

const Register = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(registerUser(formData));
  };

  useEffect(() => {
    if (user) {
      navigate("/auth/home");
    }

    if (isError && message) {
      toast.error(message);
    }
  }, [user, isError, message]);

  if (isLoading) {
    return (
      <Container sx={{ padding: "80px 0px" }}>
        <LinearProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ padding: "80px 0px" }}>
      <Card sx={{ padding: "20px" }}>
        <Typography sx={{ margin: "20px 0px" }} variant="h5" align="center">
          Register Here
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ margin: "10px 0px" }}
            variant="outlined"
            label="Enter Name"
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
            fullWidth
            required
          ></TextField>
          <TextField
            sx={{ margin: "10px 0px" }}
            variant="outlined"
            label="Enter Email"
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
            fullWidth
            required
          ></TextField>
          <TextField
            sx={{ margin: "10px 0px" }}
            variant="outlined"
            label="Enter Password"
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
            fullWidth
            required
          ></TextField>
          <TextField
            sx={{ margin: "10px 0px" }}
            variant="outlined"
            label="Confirm Password"
            type="password"
            name="password2"
            onChange={handleChange}
            value={password2}
            fullWidth
            required
          ></TextField>
          <Button
            sx={{ margin: "10px 0px" }}
            variant="contained"
            color="success"
            fullWidth
            type="submit"
          >
            Register
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default Register;
