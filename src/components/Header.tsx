import { FC, memo } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Container } from '@mui/material';
import { ShoppingCartOutlined, Store } from '@mui/icons-material';

import { getAmount } from '../util/helperFunctions';
import { IBasket } from '../types';

interface IHeader {
  basket: IBasket[];
}

const Header: FC<IHeader> = ({ basket }) => (
  <Container maxWidth='xl'>
    <AppBar position='static' sx={{ borderRadius: 1 }}>
      <Toolbar sx={{ paddingTop: 1, paddingBottom: 1, borderRadius: 2 }}>
        <IconButton edge='start' color='info'>
          <Store fontSize='large' />
        </IconButton>
        <Typography variant='h5' component='h3' sx={{ flexGrow: 1 }}>
          Online Store
        </Typography>
        <Badge color='info' badgeContent={getAmount(basket, 'amount')} overlap='circular'>
          <IconButton edge='start' color='inherit'>
            <ShoppingCartOutlined fontSize='large' />
          </IconButton>
        </Badge>
      </Toolbar>
    </AppBar>
  </Container>
);

export default memo(Header);
