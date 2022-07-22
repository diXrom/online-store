import { FC, Fragment } from 'react';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

import { IBasket } from '../types';
import { ShoppingCartOutlined } from '@mui/icons-material';
import BasketItem from './BasketItem';

interface IBasketDrawer {
  basket: IBasket[];
  setBasket: React.Dispatch<React.SetStateAction<IBasket[]>>;
  basketOpen: boolean;
  toggleDrawer: () => void;
}
const BasketDrawer: FC<IBasketDrawer> = ({ basket, setBasket, basketOpen, toggleDrawer }) => {
  const removeBasketItem = (id: number) => {
    setBasket(basket.filter((item) => item.id !== id));
  };
  return (
    <Drawer anchor='right' open={basketOpen} onClose={toggleDrawer}>
      <List sx={{ minWidth: '400px' }}>
        <ListItem disablePadding>
          <ListItemIcon>
            <IconButton color='info' onClick={toggleDrawer}>
              <ShoppingCartOutlined fontSize='large' />
            </IconButton>
          </ListItemIcon>
          <ListItemText primary={'Корзина'} />
        </ListItem>
        <Divider />
        {!basket.length ? (
          <ListItem>Корзина пуста!</ListItem>
        ) : (
          <Fragment>
            {basket.map((item) => (
              <BasketItem key={item.name} removeBasketItem={removeBasketItem} {...item} />
            ))}
            <Divider />
            <ListItem>
              <Typography sx={{ fontWeight: 700 }}>
                Общая стоимость: {basket.reduce((acc, item) => acc + item.price * item.amount, 0)} рублей.
              </Typography>
            </ListItem>
          </Fragment>
        )}
      </List>
    </Drawer>
  );
};

export default BasketDrawer;
