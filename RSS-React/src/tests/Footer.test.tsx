import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../components/footer/Footer';

describe('Footer component', () => {
  it('renders the wrapper element', () => {
    const { getByRole } = render(<Footer />);
    expect(getByRole('wrapper')).toBeInTheDocument();
  });
});
