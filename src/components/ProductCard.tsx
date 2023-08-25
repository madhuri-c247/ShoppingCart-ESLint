import * as React from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
//material ui
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
// components
import { AddToCart, RemoveToCart } from "../reducers/productReducer";
// services
import { ProductData } from "../helper/model";
import { AppDispatch, RootState } from "../store/store";

export default function ProductCard() {
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const cartValue = useAppSelector((state) => state.product.cart);
  const quantity = useAppSelector((state) => state.product.productQuantity);

  const handleAddToCart = (id: number) => {
    dispatch(AddToCart({ id, cartValue }));
  };
  const handleRemoveToCart = (id: number) => {
    dispatch(RemoveToCart({ id, cartValue }));
  };
  const product = useAppSelector((state) => state.product.product);
  return (
    <>
      <div className="product-main-card m-2">
        {product
          ? product.map((item: ProductData) => {
              return (
                <div key={item.id}>
                  <Card className="m-2 card-main">
                    <CardMedia
                      component="img"
                      alt="product"
                      height="140"
                      image={item.image}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        component="div"
                      >
                        {item.category}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        $ {item.price}
                      </Typography>
                      <CardActions className="card-actions">
                        <Button
                          className="btn"
                          size="small"
                          onClick={() => handleRemoveToCart(item.id)}
                        >
                          <RemoveIcon />
                        </Button>
                        <p> {quantity}</p>
                        <Button
                          className="btn"
                          size="small"
                          onClick={() => handleAddToCart(item.id)}
                        >
                          <AddIcon />
                        </Button>
                      </CardActions>
                    </CardContent>
                  </Card>
                </div>
              );
            })
          : "loading..."}
      </div>
    </>
  );
}
