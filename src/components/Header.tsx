import { FC } from 'react';

import { AppBar, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import { ShoppingCartOutlined, Store } from '@mui/icons-material';
import { IBasket } from '../types';

interface IHeader {
  basket: IBasket[];
}
const Header: FC<IHeader> = ({ basket }) => {
  console.log(basket)
  return (
    <AppBar position='static'>
      <Toolbar sx={{ paddingTop: 1, paddingBottom: 1 }}>
        <IconButton edge='start' color='info'>
          <Store fontSize='large' />
        </IconButton>
        <Typography variant='h5' component='h3' sx={{ flexGrow: 1 }}>
          Online Store
        </Typography>
        <Badge
          color='info'
          badgeContent={basket.reduce((acc, item) => item.amount + acc, 0)}
          overlap='circular'
        >
          <IconButton edge='start' color='inherit'>
            <ShoppingCartOutlined fontSize='large' />
          </IconButton>
        </Badge>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
