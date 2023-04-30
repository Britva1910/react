import { render, screen, fireEvent } from '@testing-library/react';
import ModalPage from '../components/modalPage/ModalPage';
import { vi } from 'vitest';

describe('ModalPage', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the modal page with the expected content', () => {
    const closePage = vi.fn();

    render(<ModalPage modalVisible={false} closePage={closePage} />);

    const okButton = screen.getByRole('button');
    expect(okButton).toBeInTheDocument();

    fireEvent.click(okButton);
    expect(closePage).toHaveBeenCalledTimes(1);
  });
});
