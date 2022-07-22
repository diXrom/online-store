import { render, screen } from '@testing-library/react';

import App from '../components/App';

describe('App component', () => {
  it('should render App', () => {
    render(<App />);
    
    expect(screen.getByText(/Фильтры по значению/i)).toBeInTheDocument();
  });
  it('should snapshot App', () => {
    const view = render(<App />);

    expect(view).toMatchSnapshot();
  });
});
