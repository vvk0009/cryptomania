import { AppBar, Badge, Button, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../providers/auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  return (
    <AppBar>
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }} variant="h6">
          <Link to={"/auth/home"}>Crypto Mania</Link>
        </Typography>
        {!user ? (
          <>
            <Link to={"/login"}>
              <Button variant="contained" size="small" color="secondary">
                Login
              </Button>
            </Link>
            <Link to={"/register"}>
              <Button
                sx={{ margin: "0px 10px" }}
                variant="contained"
                size="small"
                color="secondary"
              >
                Register
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Link to={"/auth/cart"}>
              <Badge
                badgeContent={cartItems.length}
                sx={{ margin: "0px 20px" }}
                color="error"
              >
                <Button
                  endIcon={<ShoppingCartIcon />}
                  variant="contained"
                  size="small"
                  color="success"
                >
                  Cart
                </Button>
              </Badge>
            </Link>
            <Button
              onClick={handleLogout}
              variant="contained"
              size="small"
              color="error"
            >
              Logout
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
