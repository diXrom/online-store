import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ControlFields from '../components/InputsFields/ControlFields';

const changeQuery = jest.fn();
const changeSelect = jest.fn();
const setQuery = jest.fn();
const setBasket = jest.fn();
const setAllFilters = jest.fn();

describe('ControlFields component', () => {
  it('should render ControlFields', () => {
    render(
      <ControlFields
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
  it('should works onChange function on ControlFields', () => {
    render(
      <ControlFields
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
