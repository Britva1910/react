import { render, screen } from '@testing-library/react';
import { Loader } from '../components/loader/Loader';

describe('Loader', () => {
  test('renders loader container', () => {
    render(<Loader />);
    const loaderContainer = screen.getByRole('alert');
    expect(loaderContainer).toBeInTheDocument();
  });

  test('renders spinner', () => {
    render(<Loader />);
    const spinner = screen.getByRole('status');
    expect(spinner).toBeInTheDocument();
  });
});
