import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../src/pages/index';

describe('Home', () => {
  it('renders homepage with correct title', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to Next.js!')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
