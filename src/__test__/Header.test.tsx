import { render, screen } from '@testing-library/react';

import Header from '../components/Header';

const basket = [
  {
    id: 1,
    name: 'GIGABYTE RTX 3090',
    amount: 3,
    price: 162700,
  },
  {
    id: 1,
    name: 'Palit RTX 3080 Ti',
    amount: 2,
    price: 117490,
  },
];

describe('Header component', () => {
  it('Header render', () => {
    render(<Header basket={[]} />);

    expect(screen.getByText(/online store/i)).toBeInTheDocument();
  });
  it('Header basket amount', () => {
    render(<Header basket={basket} />);

    expect(screen.getByText(/5/i)).toBeInTheDocument();
  });
});
