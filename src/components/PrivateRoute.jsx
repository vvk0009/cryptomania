import React from "react";
import useAuthStatus from "../hooks/useAuthStatus";
import { Container, LinearProgress } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { isLoggedIn, checkStatus } = useAuthStatus();

  if (checkStatus) {
    return (
      <Container sx={{ padding: "80px 0px" }}>
        <LinearProgress color="error" />
      </Container>
    );
  }

  return isLoggedIn ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoute;
