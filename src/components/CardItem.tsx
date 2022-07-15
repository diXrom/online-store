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
import { FC, useEffect, useState } from 'react';
import { IBasket, ICard } from '../types';

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
  const [active, setActive] = useState(false);
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
    card ? setActive(true) : setActive(false);
  }, [basket, id]);

  return (
    <Fade in={true} {...{ timeout: 1000 }}>
      <Grid item xs={12} md={6} lg={3}>
        <Card
          sx={{
            maxWidth: 400,
            bgcolor: '#F7F7F7',
            border: active ? '2px solid #F3E600' : '2px solid #000',
          }}
          color='primary'
        >
          <CardActionArea onClick={addCard}>
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
                  <ListItemText primary={'Производитель GPU: ' + processor} />
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
            <Button onClick={addCard} size='small' color='info' variant='contained' sx={{ fontSize: 15 }}>
              Добавить
            </Button>
            <Button
              sx={{ fontSize: 15 }}
              disabled={!active}
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
export default CardItem;
