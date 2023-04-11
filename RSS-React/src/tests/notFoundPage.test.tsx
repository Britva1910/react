import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFoundPage from '../components/pages/not-found-page/NotFoundPage';

describe('NotFoundPage', () => {
  test('renders the "404" text', () => {
    render(<NotFoundPage />);
    const aboutUsText = screen.getByText('404');
    expect(aboutUsText).toBeInTheDocument();
  });
});
