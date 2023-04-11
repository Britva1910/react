import { render, screen, fireEvent } from '@testing-library/react';
import ModalPage from '../components/pages/main-page/MainPage';
import { vi } from 'vitest';

describe('ModalPage', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the modal page with the expected content', () => {
    const closePage = vi.fn();

    render(<ModalPage />);

    const okButton = screen.getByRole('button');
    expect(okButton).toBeInTheDocument();

    fireEvent.click(okButton);
    expect(closePage).toHaveBeenCalledTimes(0);
  });
});
