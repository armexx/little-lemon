import { render, screen, fireEvent } from '@testing-library/react';
import Tablebookingform from './Tablebookingform';

test('JavaScript validation functions work correctly', () => {
    render(<Tablebookingform />);
      // Select elements
    const dateInput = screen.getByLabelText('Choose date');
    const timeSelect = screen.getByLabelText('Choose time');
    const occasionSelect = screen.getByLabelText('Occasion');
    // Fill in valid values
    fireEvent.change(dateInput, { target: { value: '2023-06-10' } });
    fireEvent.change(timeSelect, { target: { value: '17:00' } });
    fireEvent.change(guestsInput, { target: { value: '5' } });
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
    // Validate form
    fireEvent.submit(screen.getByRole('form'));
});