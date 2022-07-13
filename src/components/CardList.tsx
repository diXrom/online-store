import { FC, memo } from 'react';
import { Box, Grid } from '@mui/material';
import { IBasket, ICard } from '../types';
import CardItem from './CardItem';

interface ICardList {
  cards: ICard[];
  basket: IBasket[];
  setBasket:(value: React.SetStateAction<IBasket[]>)=> void
}
const CardList: FC<ICardList> = ({ cards,basket,setBasket}) => {
  return (
    <Box sx={{ mt: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={1} >
        {cards.map((card) => (
          <CardItem key={card.id} {...card} basket={basket} setBasket={setBasket} />
        ))}
      </Grid>
    </Box>
  );
};

export default memo(CardList);
