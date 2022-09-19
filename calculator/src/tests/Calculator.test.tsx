import calculate from '../utils/calculate';

describe('Calculate', () => {
    let expression;
    it('evaluates the expression correctly', () => {

        expression = '4+2';
        expect(calculate(expression)).toBe(6);

        expression = '3*6-7+2';
        expect(calculate(expression)).toBe(13);

        expression = '6*2+5-3*3-8';
        expect(calculate(expression)).toBe(0);

        expression = '3+4+7*2-1-9';
        expect(calculate(expression)).toBe(11);

        expression = '0.5-3';
        expect(calculate(expression)).toBe(-2.5);

        expression = '22.36*4/56.33';
        expect(calculate(expression)).toBe(1.5877862595419847);
    });

    it('evaluates expressions starting with a "-" operator', () => {
        
        expression = '-10'
        expect(calculate(expression)).toBe(-10);
    });

    it('evaluates longer expressions starting with a "-" operator', () => {

        expression = '-30-6'
        expect(calculate(expression)).toBe(-36);

        expression = '-0.5+5.3'
        expect(calculate(expression)).toBe(4.8)
    });

    it('should throw an error for expressions starting with any other operator apart from "-" ', () => {

        expression = '*30-6'
        expect(calculate(expression)).toThrow();

        expression = '*3'
        expect(calculate(expression)).toThrow();

        expression = '+4-6'
        expect(calculate(expression)).toThrow();

        expression = '/4-6'
        expect(calculate(expression)).toThrow();
    });

    it('ignores trailing operators while evaluating the expression correctly', () => {
        expression = '2+3+4-4*3-'
        expect(calculate(expression)).toBe(-3);
    });

    it('ignores every expression after multiple operators while evaluating the expression correctly', () => {
        expression = '2+3++4-/4*3+78-'
        expect(calculate(expression)).toBe(5);
    });
});