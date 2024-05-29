import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const CoinCard = ({ coin }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardMedia
          sx={{ height: 140 }}
          image={coin?.item.large}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {coin?.item.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/auth/coin/${coin?.item.id}`}>
            <Button size="small">Learn More</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CoinCard;
