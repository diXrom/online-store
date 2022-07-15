import { FC, memo } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { SentimentVeryDissatisfied } from '@mui/icons-material';

import CardItem from './CardItem';
import { IBasket, ICard } from '../types';

interface ICardList {
  cards: ICard[];
  basket: IBasket[];
  setBasket: (value: React.SetStateAction<IBasket[]>) => void;
}

const ErrorMessage: FC = () => (
  <Box sx={{ m: '50px auto' }}>
    <Typography variant='h5' component='div' color='primary' sx={{ display: 'flex', alignItems: 'center' }}>
      <SentimentVeryDissatisfied /> Извините, совпадений не обнаружено
    </Typography>
  </Box>
);

const CardList: FC<ICardList> = ({ cards, basket, setBasket }) => {
  return (
    <Box sx={{ mt: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={1} sx={{ justifyContent: 'center' }}>
        {cards.length ? (
          cards.map((card) => <CardItem key={card.id} {...card} basket={basket} setBasket={setBasket} />)
        ) : (
          <ErrorMessage />
        )}
      </Grid>
    </Box>
  );
};

export default memo(CardList);
