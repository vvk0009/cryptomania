import { Container, Grid, LinearProgress, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CoinCard from "../components/CoinCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingCoins } from "../providers/coin/coinSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const { coins, isLoading, isError } = useSelector((state) => state.coins);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    dispatch(fetchTrendingCoins());
  }, [user]);

  if (isError) {
    return (
      <Container sx={{ padding: "80px 0px" }}>
        <Typography variant="h4" color={"error"} align="center">
          Something Went Wrong...
        </Typography>
      </Container>
    );
  }

  if (isLoading || coins.length === 0) {
    return (
      <Container sx={{ padding: "80px 0px" }}>
        <LinearProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ padding: "80px 0px" }}>
      <Typography variant="h2" sx={{ margin: "20px 0px" }} align="center">
        Welcome {user?.name}!
      </Typography>
      <Typography variant="h6" align="center">
        TOP TRENDING COINS
      </Typography>

      <Grid container spacing={2} sx={{ margin: "20px 0px" }}>
        {coins?.map((coin) => (
          <CoinCard key={coin.item.coin_id} coin={coin} />
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
