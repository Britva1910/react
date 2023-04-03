import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from '../components/form/Form';

describe('Form', () => {
  it('renders all form fields', () => {
    render(<Form updateData={() => {}} />);
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date of birth/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/i consent to my personal data/i)).toBeInTheDocument();
    expect(screen.getByText(/upload profile picture/i)).toBeInTheDocument();
    expect(screen.getByText(/submit/i)).toBeInTheDocument();
  });
});
