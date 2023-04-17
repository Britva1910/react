import React from 'react';
import { render } from '@testing-library/react';
import PersonCard from '../components/personCard/PersonCard';

const mockData = {
  firstName: 'John',
  lastName: 'Doe',
  country: 'USA',
  file: 'image.png',
  birthday: '12.12.12',
  consent: true,
  promo: 'Yes',
};

describe('PersonCard component', () => {
  test('renders user name', () => {
    const { getByText } = render(<PersonCard data={mockData} />);
    const nameElement = getByText(/User name:/i);
    expect(nameElement.nextSibling?.textContent).toBe(mockData.firstName);
  });

  test('renders user surname', () => {
    const { getByText } = render(<PersonCard data={mockData} />);
    const surnameElement = getByText(/User surname:/i);
    expect(surnameElement.nextSibling?.textContent).toBe(mockData.lastName);
  });

  test('renders user country', () => {
    const { getByText } = render(<PersonCard data={mockData} />);
    const countryElement = getByText(/User country:/i);
    expect(countryElement.nextSibling?.textContent).toBe(mockData.country);
  });

  test('renders consented data', () => {
    const { getByText } = render(<PersonCard data={mockData} />);
    const consentElement = getByText(/Consented data:/i);
    expect(consentElement.nextSibling?.textContent).toBe('Yes');
  });

  test('renders promo notifications', () => {
    const { getByText } = render(<PersonCard data={mockData} />);
    const promoElement = getByText(/Promo notifications:/i);
    expect(promoElement.nextSibling?.textContent).toBe('Yes');
  });
});
