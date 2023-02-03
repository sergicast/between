import { render, cleanup, waitFor, screen } from '@testing-library/react';
import { ExerciseTwo } from './ExerciseTwo';
import { getStaticsRanges } from '../../services';


jest.mock('../../services', () => {
    return {
        getStaticsRanges: jest.fn(),
    };
});

const range = [1.99, 5.99, 10.99, 30.99, 50.99, 100.99];

describe('ExerciseTwo', () => {

    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

    it('h1 title should exist', async () => {
        getStaticsRanges.mockResolvedValue(range);

        await waitFor(async () => {
            render(<ExerciseTwo />);
        });

        expect(screen.getByText('Exercise 2')).toBeInTheDocument();
    });

});
