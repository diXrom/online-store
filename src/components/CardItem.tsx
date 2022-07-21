import { FC, memo, useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  List,
  ListItem,
  ListItemText,
  Chip,
  Fade,
  Grid,
} from '@mui/material';

import { IBasket, ICard } from '../types';
import { getAmount } from '../util/helperFunctions';

interface ICardItem extends ICard {
  basket: IBasket[];
  setBasket: (value: React.SetStateAction<IBasket[]>) => void;
}
const CardItem: FC<ICardItem> = ({
  id,
  name,
  quantity,
  brand,
  processor,
  size,
  popularly,
  price,
  basket,
  setBasket,
}) => {
  const [active, setActive] = useState(true);
  const [disable, setDisable] = useState(false);
  const addCard = () => {
    setBasket((cards) => {
      if (cards.every((card) => card.id !== id)) return [...cards, { id, name, amount: 1, price }];
      return cards.map((card) => {
        if (card.id === id) card.amount += 1;
        return card;
      });
    });
  };
  const removeCard = () => {
    setBasket((cards) =>
      cards
        .map((card) => {
          if (card.id === id) card.amount -= 1;
          return card;
        })
        .filter((card) => card.amount > 0),
    );
  };
  useEffect(() => {
    const card = basket.find((item) => item.id === id);
    const amount = getAmount(basket, 'amount');
    amount === 20 ? setDisable(true) : setDisable(false);
    card ? setActive(false) : setActive(true);
  }, [basket, id]);

  return (
    <Fade in={true} {...{ timeout: 1000 }}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card
          sx={{
            m: 'auto',
            maxWidth: 400,
            bgcolor: '#F7F7F7',
            border: active ? '2px solid #000' : '2px solid #F3E600',
          }}
          color='primary'
        >
          <CardActionArea onClick={addCard} disabled={disable}>
            <CardMedia
              sx={{ objectFit: 'contain' }}
              component='img'
              height='150'
              image={`./images/${name}.png`}
              alt={name}
            />
            <CardContent>
              <Typography gutterBottom variant='h6' component='div'>
                {name}
              </Typography>
              <List sx={{ p: 0 }}>
                <ListItem disablePadding>
                  <ListItemText primary={'Количество: ' + quantity} />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText primary={'Производитель: ' + brand} />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText primary={'GPU: ' + processor} />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText primary={'Количество памяти: ' + size} />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText primary={`Популярный: ${popularly ? 'Да' : 'Нет'}`} />
                </ListItem>
              </List>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              onClick={addCard}
              disabled={disable}
              size='small'
              color='info'
              variant='contained'
              sx={{ fontSize: 15 }}
            >
              Добавить
            </Button>
            <Button
              sx={{ fontSize: 15 }}
              disabled={active}
              size='small'
              color='primary'
              variant='contained'
              onClick={removeCard}
            >
              Удалить
            </Button>
            <Chip label={`${price}₽`} color='info' sx={{ ml: 'auto' }} />
          </CardActions>
        </Card>
      </Grid>
    </Fade>
  );
};

export default memo(CardItem);
