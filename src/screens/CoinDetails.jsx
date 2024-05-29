import {
  Button,
  Card,
  CardMedia,
  Container,
  LinearProgress,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleCoin } from "../providers/coin/coinSlice";
import { add } from "../providers/cart/cartSlice";

const CoinDetails = () => {
  const { coin, isError, isLoading } = useSelector((state) => state.coins);

  const dispatch = useDispatch();
  const { id } = useParams();

  // Add to cart
  const handleAdd = (coin) => {
    dispatch(add(coin));
  };

  useEffect(() => {
    dispatch(fetchSingleCoin(id));
  }, [id]);

  if (isError) {
    return (
      <Container sx={{ padding: "80px 0px" }}>
        <Typography variant="h4" color={"error"} align="center">
          Something Went Wrong...
        </Typography>
      </Container>
    );
  }

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
        <CardMedia
          sx={{ height: 240 }}
          image={coin?.image?.large}
          title="green iguana"
        />
        <Typography variant="h2" sx={{ margin: "10px 0px" }}>
          Coin Price : ${coin?.market_data.current_price.usd}
        </Typography>
        <Typography variant="h4" sx={{ margin: "10px 0px" }}>
          Coin Name : {coin?.name}
        </Typography>
        <Typography variant="h5" sx={{ margin: "10px 0px" }}>
          Coin Description : {coin?.description.en}
        </Typography>
        <Button
          onClick={() => handleAdd(coin)}
          variant="contained"
          color="success"
        >
          Add To Cart
        </Button>
        <Button sx={{ margin: "0px 20px" }} variant="outlined" color="success">
          Visit Offical Website
        </Button>
      </Card>
    </Container>
  );
};

export default CoinDetails;
