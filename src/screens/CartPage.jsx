import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const total = cartItems.reduce(
    (p, c) => p + c.market_data.current_price.usd,
    0
  );

  return (
    <Container sx={{ padding: "80px 0px" }}>
      <Typography variant="h5">Your Cart</Typography>

      <Grid container spacing={2} sx={{ margin: "20px 0px" }}>
        <Grid item xs={12} sm={8} md={8} lg={8}>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Card>
            <CardContent>
              <Typography variant="h3">Total : ${total.toFixed(4)}</Typography>
              <CardActions>
                <Button variant="contained">Check Out</Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CartPage;
