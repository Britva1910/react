import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailInformation from '../components/pages/main-page/components/detailInformation/DetailInformation';

describe('DetailInformation', () => {
  const handleModalWindow = () => {};
  const currentPictureId = '123';

  beforeEach(() => {
    render(
      <DetailInformation
        handleModalWindow={handleModalWindow}
        currentPictureId={currentPictureId}
      />
    );
  });

  it('should render loader when data is loading', () => {
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('should render image and information when data is loaded', async () => {
    expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    expect(screen.getByText('Views:')).toBeInTheDocument();
    expect(screen.getByText('Likes:')).toBeInTheDocument();
    expect(screen.getByText('Publication date:')).toBeInTheDocument();
    expect(screen.getByText('Author:')).toBeInTheDocument();
    expect(screen.getByText('Tags:')).toBeInTheDocument();
    expect(handleModalWindow).not.toHaveBeenCalled();
  });

  it('should call handleModalWindow with undefined and false when modal background is clicked', () => {
    const modalBackground = screen.getByTestId('modal-background');

    modalBackground.click();

    expect(handleModalWindow).toHaveBeenCalledWith(undefined, false);
  });

  it('should call handleModalWindow with undefined and false when close button is clicked', async () => {
    await screen.findByAltText('image');

    const closeButton = screen.getByLabelText('close-button');

    closeButton.click();

    expect(handleModalWindow).toHaveBeenCalledWith(undefined, false);
  });
});
