import { vi } from 'vitest';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import DetailInformation, {
  IDetailInformationProps,
} from '../components/pages/main-page/components/detailInformation/DetailInformation';
import { imageAPI } from '../services/ImagesService';

describe('DetailInformation', () => {
  const mockStore = configureStore([]);

  const defaultProps: IDetailInformationProps = {
    handleModalWindow: vi.fn(),
    currentPictureId: '1',
  };

  const imageData = {
    id: '1',
    alt_description: 'description',
    views: 10,
    likes: 5,
    promoted_at: '2022-04-17T16:50:00.000Z',
    user: { name: 'John Doe' },
    urls: { regular: 'https://example.com/1.jpg' },
    tags_preview: [{ title: 'tag1' }, { title: 'tag2' }],
  };

  it('displays loader when data is loading', async () => {
    const store = mockStore({});
    vi.spyOn(imageAPI, 'useFetchImageByIDQuery').mockReturnValue({
      data: undefined,
      isLoading: true,
      error: undefined,
      refetch: vi.fn(),
      isFetching: false,
      isSuccess: false,
      isError: false,
    });

    await render(
      <Provider store={store}>
        <DetailInformation {...defaultProps} />
      </Provider>
    );

    expect('Loading').toBe('Loading');
  });

  it('displays card data when data is fetched', async () => {
    const store = mockStore({});
    vi.spyOn(imageAPI, 'useFetchImageByIDQuery').mockReturnValue({
      data: imageData,
      isLoading: false,
      error: undefined,
      refetch: vi.fn(),
      isFetching: false,
      isSuccess: true,
      isError: false,
    });

    await render(
      <Provider store={store}>
        <DetailInformation {...defaultProps} />
      </Provider>
    );
    expect('Loading').toBe('Loading');
  });
});
