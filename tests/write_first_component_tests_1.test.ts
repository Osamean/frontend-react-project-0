import { render, screen } from '@testing-library/react';
import HomePage from '../src/components/HomePage';
import '@testing-library/jest-dom';

describe('HomePage', () => {
  it('renders homepage with correct heading', () => {
    render(<HomePage />);
    expect(screen.getByText('Welcome to Our Application')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = render(<HomePage />);
    expect(container).toMatchSnapshot();
  });

  it('displays welcome message', () => {
    render(<HomePage />);
    expect(screen.getByText('Get started by editing')).toBeInTheDocument();
  });
});
