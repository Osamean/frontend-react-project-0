import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '../src/components/HomePage';

describe('HomePage', () => {
  it('renders without crashing', () => {
    render(<HomePage />);
    expect(screen.getByText('Welcome to Next.js!')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = render(<HomePage />);
    expect(container).toMatchSnapshot();
  });
});
