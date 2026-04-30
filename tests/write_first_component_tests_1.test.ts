import { render, screen } from '@testing-library/react';
import HomePage from '../components/HomePage';
import { BrowserRouter } from 'react-router-dom';

describe('HomePage', () => {
  it('renders the homepage with expected content', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    expect(screen.getByText(/welcome to the frontend project/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/welcome to the frontend project/i);
    expect(screen.getByText(/built with nextjs and typescript/i)).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
