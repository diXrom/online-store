import { FC } from 'react';
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import Filter from './Filter';
import Header from './Header';
import Footer from './Footer';
import CardList from './CardList';

import useFilterByName from '../hooks/useFilterByName';
import useInitialFilters from '../hooks/useInitialFilters';
import useLocalStorage from '../hooks/useLocalStorage';
import useFilter from '../hooks/useFilter';

import theme from '../util/theme';
import { IBasket } from '../types';

const App: FC = () => {
  const [basket, setBasket] = useLocalStorage<IBasket[]>([], 'basket');
  const filters = useInitialFilters();
  const filteredCards = useFilter(filters);
  const { query, setQuery, changeQuery, availableItems } = useFilterByName(filteredCards);
  return (
    <ThemeProvider theme={theme}>
      <Header basket={basket} />
      <Container maxWidth='xl' sx={{ minHeight: 'calc(100vh - 175px)' }}>
        <Filter
          {...filters}
          query={query}
          setQuery={setQuery}
          changeQuery={changeQuery}
          setBasket={setBasket}
        />
        <CardList cards={availableItems} setBasket={setBasket} basket={basket} />
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
