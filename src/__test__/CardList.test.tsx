import { render, screen } from '@testing-library/react';

import CardList from '../components/CardList';

const setBasket = jest.fn();
const data = [
  {
    id: 1,
    name: 'GIGABYTE RTX 3090',
    quantity: 4,
    brand: 'GIGABYTE',
    processor: 'NVIDIA',
    size: 16,
    popularly: true,
    price: 162700,
  },
];

describe('CardList component', () => {
  it('CardList render with data', () => {
    render(<CardList cards={data} basket={[]} setBasket={setBasket} />);

    expect(screen.getByText(/GIGABYTE RTX 3090/i)).toBeInTheDocument();
  });
  it('CardList render with empty data', () => {
    render(<CardList cards={[]} basket={[]} setBasket={setBasket} />);

    expect(screen.getByText(/Извините, совпадений не обнаружено/i)).toBeInTheDocument();
  });
});
