import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SideMenu from './';


const getButtons = () => {
    return {
        buttonOne: screen.getByText('Exercise 1'),
        buttonTwo: screen.getByText('Exercise 2')
    };
};

describe('SideMenu component', () => {
    let buttons;

    beforeEach(() => {
        render(
            <MemoryRouter>
                <SideMenu />
            </MemoryRouter>
        );
        buttons = getButtons();
    });
    afterEach(cleanup);

    it('render the links correctly', () => {

        expect(buttons.buttonOne).toBeInTheDocument();
        expect(buttons.buttonTwo).toBeInTheDocument();
    });

    it('links should have correct routes', () => {

        expect(buttons.buttonOne.getAttribute('href')).toBe('/exercise-one');
        expect(buttons.buttonTwo.getAttribute('href')).toBe('/exercise-two');
    });
});
