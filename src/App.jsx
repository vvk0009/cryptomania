import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import PageNotFound from "./screens/PageNotFound";
import Register from "./screens/Register";
import Login from "./screens/Login";
import CoinDetails from "./screens/CoinDetails";
import PrivateRoute from "./components/PrivateRoute";
import DefaultPage from "./screens/DefaultPage";
import CartPage from "./screens/CartPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<DefaultPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth" element={<PrivateRoute />}>
          <Route path="home" element={<Home />} />
          <Route path="coin/:id" element={<CoinDetails />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
