import { FC } from 'react';
import { ListItem, Typography, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

import { IBasket } from '../types';

interface IBasketItem extends IBasket {
  removeBasketItem: (id: number) => void;
}
const BasketItem: FC<IBasketItem> = ({ id, name, price, amount, removeBasketItem }) => {
  return (
    <ListItem>
      <Typography variant='body1'>
        {name} — {price}₽ x{amount}
      </Typography>
      <IconButton onClick={() => removeBasketItem(id)}>
        <Close />
      </IconButton>
    </ListItem>
  );
};

export default BasketItem;
