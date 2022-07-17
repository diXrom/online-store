import { render, screen } from '@testing-library/react';

import App from '../components/App';

describe('App component', () => {
  it('App render', () => {
    render(<App />);
    
    expect(screen.getByText(/Фильтры по значению/i)).toBeInTheDocument();
  });
  it('App snapshot', () => {
    const view = render(<App />);

    expect(view).toMatchSnapshot();
  });
});
