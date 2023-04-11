import React from 'react';
import { render } from '@testing-library/react';
import Card from '../components/card/Card';

describe('Card component', () => {
  const cardData = {
    alt_description: 'test',
    urls: {
      small: 'url',
      full: 'url',
      raw: 'url',
      regular: 'url',
    },
    user: {
      name: 'test-name',
    },
    likes: '10',
    promoted_at: '2022-04-09T00:00:00.000Z',
    downloads: 5,
    id: '1234',
    views: 50,
    tags_preview: [
      { type: 'test', title: 'tag1' },
      { type: 'test', title: 'tag2' },
    ],
  };

  it('should render the component', () => {
    const { getByAltText, getByText } = render(
      <Card
        cardData={cardData}
        key={''}
        handleModalWindow={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(getByAltText('card_image')).toBeInTheDocument();
    expect(getByText('test')).toBeInTheDocument();
  });
});
