import { render, screen, cleanup } from "@testing-library/react";
import Range from './';


const props = {
    range: { min: 1, max: 100 },
    staticRange: []
};


const getInputs = () => {
    return {
        one: screen.getByAltText('num_min'),
        two: screen.getByAltText('num_max')
    };
};

describe('Range', () => {
    let inputs;
    beforeEach(() => {
        render(<Range {...props} />);
        inputs = getInputs();
    });
    afterEach(cleanup);
    
    it('Should render two inputs', () => {
        
        expect(inputs.one).toBeInTheDocument();
        expect(inputs.two).toBeInTheDocument();
    });
    
    it('Should have the same prop values', () => {
        
        expect(inputs.one).toHaveDisplayValue('1');
        expect(inputs.two).toHaveDisplayValue('100');
    });
    
});
