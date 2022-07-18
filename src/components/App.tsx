import { FC, useState } from 'react';
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import Filter from './Filter';
import Header from './Header';
import Footer from './Footer';
import CardList from './CardList';
import ModalInfo from './Modal';
import ErrorBoundry from './ErrorBoundry';
import BasketDrawer from './BasketDrawer';

import useSearchByName from '../hooks/useSearchByName';
import useInitialFilters from '../hooks/useInitialFilters';
import useLocalStorage from '../hooks/useLocalStorage';
import useFilter from '../hooks/useFilter';
import useShowModal from '../hooks/useShowModal';

import theme from '../util/theme';
import crossCheckLog from '../util/crossCheckLog';
import { IBasket } from '../types';

const App: FC = () => {
  const [basket, setBasket] = useLocalStorage<IBasket[]>([], 'basket');
  const [isBasketOpen, setBasketOpen] = useState(false);
  const modal = useShowModal(basket);

  const filters = useInitialFilters();
  const filteredCards = useFilter(filters);
  const { availableItems, ...query } = useSearchByName(filteredCards);

  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundry>
        <Header basket={basket} setBasketOpen={() => setBasketOpen(true)} />
        <Container maxWidth='xl' sx={{ minHeight: 'calc(100vh - 155px)' }}>
          <Filter {...filters} {...query} setBasket={setBasket} />
          <CardList cards={availableItems} setBasket={setBasket} basket={basket} />
        </Container>
        <Footer />
        <ModalInfo {...modal} />
        <BasketDrawer
          basket={basket}
          setBasket={setBasket}
          basketOpen={isBasketOpen}
          toggleDrawer={() => setBasketOpen(false)}
        />
      </ErrorBoundry>
    </ThemeProvider>
  );
};

export default App;
crossCheckLog();
