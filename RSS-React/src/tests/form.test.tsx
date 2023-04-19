import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../components/form/form';
import { vi } from 'vitest';

describe('Form', () => {
  const updateDataMock = vi.fn();

  beforeEach(() => {
    updateDataMock.mockClear();
  });

  it('renders all form fields', () => {
    render(<Form updateData={() => {}} />);
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date of birth/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/i consent to my personal data/i)).toBeInTheDocument();
    expect(screen.getByText(/upload profile picture/i)).toBeInTheDocument();
    expect(screen.getByText(/submit/i)).toBeInTheDocument();
  });

  it('test required field validation', async () => {
    render(<Form updateData={updateDataMock} />);
    const firstNameInput = screen.getByLabelText('First name');

    fireEvent.change(firstNameInput, { target: { value: '' } });
    fireEvent.submit(screen.getByRole('btn_submit'));
    expect(await screen.findByText('Please enter your name')).toBeInTheDocument();
    expect(updateDataMock).not.toBeCalled();
  });

  it('test pattern validation', async () => {
    render(<Form updateData={updateDataMock} />);
    const firstNameInput = screen.getByLabelText('First name');

    fireEvent.change(firstNameInput, { target: { value: 'john' } });
    fireEvent.submit(screen.getByRole('btn_submit'));
    expect(
      await screen.findByText('Only latin letters, the first letter should be uppercase')
    ).toBeInTheDocument();
    expect(updateDataMock).not.toBeCalled();
  });
});
