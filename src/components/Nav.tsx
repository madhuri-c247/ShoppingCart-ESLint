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
import { Trans, useTranslation } from 'react-i18next';
//react-i18next
import '../helper/i18n';

export default function NavBar() {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const cartValue = useAppSelector((state)=> state.product.cart);
  const [skills, setSkills] = React.useState <string>('en');
  const {i18n} = useTranslation();
  const onHandleChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
      setSkills(e.target.value);
  };

  React.useEffect(()=>{
    i18n.changeLanguage(skills);
  },[skills, i18n]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar> 
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Trans i18nKey="description.logoName"> Shop Here </Trans> :)   
          </Typography>
          <Button color="inherit"> <ShoppingCartIcon/> {cartValue} </Button>
          <select name="lang" id="en" value={skills} onChange={(e)=> onHandleChange(e)}>
            <option value="en">English</option>
            <option value="hin">Hindi</option> 
            <option value="de">German</option> 
          </select>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}