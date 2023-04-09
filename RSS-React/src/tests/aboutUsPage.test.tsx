import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUsPage from '../components/pages/about-us-page/AboutUsPage';

describe('AboutUsPage', () => {
  test('renders the "About us" text', () => {
    render(<AboutUsPage />);
    const aboutUsText = screen.getByText('About us');
    expect(aboutUsText).toBeInTheDocument();
  });
});
