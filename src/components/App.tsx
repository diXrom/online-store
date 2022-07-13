import { FC } from 'react';
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import Filter from './Filter';
import Header from './Header';
import Footer from './Footer';
import CardList from './CardList';
import theme from '../util/theme';
import { useInitialState } from '../hooks/useInitialState';

const App: FC = () => {
  const { cards, basket, setBasket, setCards, ...state } = useInitialState();
  console.log(cards);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl'>
        <Header basket={basket} />
        <Filter {...state} />
        <CardList cards={cards} setCards={setCards} setBasket={setBasket} />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
