import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../providers/cart/cartSlice";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <Card sx={{ margin: "20px 0px" }}>
      <CardMedia sx={{ height: 100 }} image={cartItem?.image?.large} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cartItem?.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          ${cartItem?.market_data.current_price.usd}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={``}>
          <Button
            size="small"
            color="error"
            onClick={() => handleRemove(cartItem?.id)}
          >
            Remove
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CartItem;
