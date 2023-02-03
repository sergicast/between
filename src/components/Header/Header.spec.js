import { cleanup, render, screen } from "@testing-library/react";
import Header from './';

describe('Header', () => {

    beforeEach(() => {
       render(<Header />);
    });
    
    afterEach(cleanup);

    it('should have two img', () => {
        
        const betweenLogo = screen.getByAltText('between logo');
        const mangoLogo = screen.getByAltText('mango logo');
        expect(betweenLogo).toBeInTheDocument();
        expect(mangoLogo).toBeInTheDocument();
    });

});
