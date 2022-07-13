import { FC } from 'react';
import { Box, Grid } from '@mui/material';

import FiltersByValue, { IFiltersByValue } from './InputsFields/FiltersByValue';
import FiltersByRange, { IFiltersByRange } from './InputsFields/FiltersByRange';
import ContorlFields, { IContorlFields } from './InputsFields/ContorlFields';
import Item from '../util/Item';

interface IFilters extends IFiltersByValue, IContorlFields, IFiltersByRange {}
const Filters: FC<IFilters> = ({
  filters,
  quantity,
  price,
  query,
  select,
  handleFilter,
  changeQuantity,
  changePrice,
  changeQuery,
  changeSelect,
  setQuery,
}) => {
  return (
    <Box sx={{ mt: 2 }}>
      <Grid container spacing={2} columns={18}>
        <Grid item xs={18} md={18} lg={8}>
          <Item>
            <FiltersByValue filters={filters} handleFilter={handleFilter} />
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
              setQuery={setQuery}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Filters;
