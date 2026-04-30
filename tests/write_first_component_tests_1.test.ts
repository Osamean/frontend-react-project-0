import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../src/pages/index';

describe('Home', () => {
  it('renders homepage with correct heading', () => {
    render(<Home />);
    expect(screen.getByText(/welcome to next\.js!/i)).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
