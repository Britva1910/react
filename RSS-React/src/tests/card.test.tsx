//import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from '../components/card/Card';

describe('Card component', () => {
  test('renders card information', () => {
    render(
      <Card
        author="John Doe"
        title="Example Book"
        imgURL="https://example.com/book.jpg"
        year={2022}
        language="English"
        pages={200}
        publisher="Microsoft Press"
        ISBN="978-0735619678"
        format="Paperback"
        category="Software Engineering"
      />
    );

    const titleElement = screen.getByText(/Example Book/i);
    expect(titleElement).toBeInTheDocument();

    const authorElement = screen.getByText(/John Doe/i);
    expect(authorElement).toBeInTheDocument();

    const imgElement = screen.getByAltText(/img book/i);
    expect(imgElement).toHaveAttribute('src', 'https://example.com/book.jpg');
  });
});
