import { FC } from 'react';
import { Box, Grid } from '@mui/material';

import Item from '../util/Item';
import FiltersByValue, { IFiltersByValue } from './InputsFields/FiltersByValue';
import FiltersByRange, { IFiltersByRange } from './InputsFields/FiltersByRange';
import ContorlFields, { IContorlFields } from './InputsFields/ContorlFields';

interface IFilters extends IFiltersByValue, IContorlFields, IFiltersByRange {}
const Filters: FC<IFilters> = ({
  quantity,
  price,
  query,
  select,
  brand,
  size,
  processor,
  popularly,
  changeQuantity,
  changePrice,
  changeQuery,
  changeSelect,
  setQuery,
  changeBrand,
  changeSize,
  changeProcessor,
  changePopularly,
  setBasket,
  setAllFilters,
}) => (
  <Box sx={{ mt: 2 }}>
    <Grid container spacing={2} columns={18}>
      <Grid item xs={18} md={18} lg={8}>
        <Item>
          <FiltersByValue
            brand={brand}
            size={size}
            processor={processor}
            popularly={popularly}
            changeBrand={changeBrand}
            changeSize={changeSize}
            changeProcessor={changeProcessor}
            changePopularly={changePopularly}
          />
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
          <ContorlFields
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

export default Filters;
