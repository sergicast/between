import React from 'react';
import { render, cleanup, waitFor, screen } from '@testing-library/react';
import { ExerciseOne } from './ExerciseOne';
import { getMinMaxRange } from '../../services';


jest.mock('../../services', () => {
  return {
    getMinMaxRange: jest.fn(),
  };
});

describe('ExerciseOne', () => {

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it('h1 title should exist', async () => {
    getMinMaxRange.mockResolvedValue({ min: 0, max: 10 });

    await waitFor(async () => {
      render(<ExerciseOne />);
    });

    expect(screen.getByText('Exercise 1')).toBeInTheDocument();
  });

});
