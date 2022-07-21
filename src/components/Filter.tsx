import { FC, memo } from 'react';
import { Box, Grid } from '@mui/material';

import Item from '../util/Item';
import FiltersByValue, { IFiltersByValue } from './InputsFields/FiltersByValue';
import FiltersByRange, { IFiltersByRange } from './InputsFields/FiltersByRange';
import ControlFields, { IControlFields } from './InputsFields/ControlFields';

interface IFilters extends IFiltersByValue, IControlFields, IFiltersByRange {}
const Filters: FC<IFilters> = ({
  quantity,
  price,
  query,
  select,
  filters,
  changeFilters,
  changeQuantity,
  changePrice,
  changeQuery,
  changeSelect,
  setQuery,
  setBasket,
  setAllFilters,
}) => (
  <Box sx={{ mt: 2 }}>
    <Grid container spacing={2} columns={18}>
      <Grid item xs={18} md={18} lg={8}>
        <Item>
          <FiltersByValue filters={filters} changeFilters={changeFilters} />
        </Item>
      </Grid>
      <Grid item xs={18} md={9} lg={5}>
        <Item>
          <FiltersByRange
            quantity={quantity}
            price={price}
            changeQuantity={changeQuantity}
            changePrice={changePrice}
          />
        </Item>
      </Grid>
      <Grid item xs={18} md={9} lg={5}>
        <Item>
          <ControlFields
            query={query}
            select={select}
            changeQuery={changeQuery}
            changeSelect={changeSelect}
            setBasket={setBasket}
            setQuery={setQuery}
            setAllFilters={setAllFilters}
          />
        </Item>
      </Grid>
    </Grid>
  </Box>
);

export default memo(Filters);
