import { render, screen, fireEvent } from '@testing-library/react';
import ModalPage from '../components/pages/main-page/MainPage';

describe('ModalPage', () => {
  it('renders the modal page with the expected content', () => {
    const closePage = () => {};
    const modalVisible = true;

    render(<ModalPage />);

    const okButton = screen.getByText('Ok');
    expect(okButton).toBeInTheDocument();

    fireEvent.click(okButton);
    expect(closePage).toHaveBeenCalled();
  });
});
