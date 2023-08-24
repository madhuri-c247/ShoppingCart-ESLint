import * as React from 'react';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
//material ui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//services
import { RootState } from '../store/store';

export default function NavBar() {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const cartValue = useAppSelector((state)=> state.product.cart);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shop Here :)
          </Typography>
          <Button color="inherit"> <ShoppingCartIcon/> {cartValue} </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}