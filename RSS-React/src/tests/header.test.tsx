import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/header/Header';

describe('Header', () => {
  it('should display the correct page name based on the URL', () => {
    render(
      <MemoryRouter initialEntries={['/about-us']}>
        <Header />
      </MemoryRouter>
    );
    const pageNameElement = screen.getByText('About us page');
    expect(pageNameElement).toBeInTheDocument();
  });

  it('should display navigation links', () => {
    render(
      <MemoryRouter initialEntries={['/about-us']}>
        <Header />
      </MemoryRouter>
    );
    const aboutUsNavLink = screen.getByRole('link', { name: 'About us' });
    expect(aboutUsNavLink).toBeInTheDocument();

    const mainPageNavLink = screen.getByRole('link', { name: 'Main page' });
    expect(mainPageNavLink).toBeInTheDocument();
  });
});
