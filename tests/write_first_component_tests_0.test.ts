import { render, screen } from '@testing-library/react';
import Home from '../src/pages/index';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders homepage with correct heading', () => {
    render(<Home />);
    const heading = screen.getByText(/welcome to our application/i);
    expect(heading).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
