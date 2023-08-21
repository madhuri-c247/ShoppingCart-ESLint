import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, RemoveToCart } from '../reducers/productReducer';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
export default function ProductCard() {

    const dispatch = useDispatch();
    const cartValue = useSelector(state=> state.product.cart);
    const quantity = useSelector(state=> state.product.productQuantity);

    const handleAddToCart = (id)=>{
        dispatch(AddToCart({id,cartValue}))
    } 
    const handleRemoveToCart = (id)=>{
        dispatch(RemoveToCart({id,cartValue}))
    } 

    const product = useSelector((state) => state.product.product)
    return (
        <>
            <div className='product-main-card m-2'>
                {product ?
                    product.map((item) => {
                        return <div className='m-2' key={item.id} >
                            <Card style={{ width: '20vw', height: '45vh' }}>
                                <CardMedia
                                    component="img"
                                    alt="product"
                                    height="140"
                                    image={item.image}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.category}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    $ {item.price}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button className='btn' size="small"onClick={()=>handleRemoveToCart(item.id)} ><RemoveIcon/></Button>
                                    <Typography  size="small" >Add To Cart {quantity}</Typography>
                                    <Button className='btn' size="small" onClick={()=>handleAddToCart(item.id)}><AddIcon/></Button>
                                </CardActions>
                            </Card>
                        </div>
                    })
                    : 'loading...'}
            </div>
        </>
    );
}