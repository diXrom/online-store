import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContorlFields from '../components/InputsFields/ContorlFields';

const changeQuery = jest.fn();
const changeSelect = jest.fn();
const setQuery = jest.fn();
const setBasket = jest.fn();
const setAllFilters = jest.fn();

describe('Search component', () => {
  it('Search render', () => {
    render(
      <ContorlFields
        query={'поиск'}
        select={''}
        changeQuery={changeQuery}
        changeSelect={changeSelect}
        setQuery={setQuery}
        setBasket={setBasket}
        setAllFilters={setAllFilters}
      />,
    );
    expect(screen.getByLabelText(/поиск/i)).toBeInTheDocument();
  });
  it('Search function onChange works', () => {
    render(
      <ContorlFields
        query={''}
        select={''}
        changeQuery={changeQuery}
        changeSelect={changeSelect}
        setQuery={setQuery}
        setBasket={setBasket}
        setAllFilters={setAllFilters}
      />,
    );

    userEvent.type(screen.getByRole('textbox'), 'MSI');
    expect(changeQuery).toHaveBeenCalledTimes(3);
  });
});
