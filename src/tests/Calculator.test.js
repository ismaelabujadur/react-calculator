import calculate from '../utils/calculate.js';

describe('Calculate', () => {
    let expression;
    test('evaluates the expression correctly', () => {
        expression = '2+2+1-5*3';
        expect(calculate(expression)).toBe(-10);

        expression = '0+1*4';
        expect(calculate(expression)).toBe(4);

        expression = '0-21';
        expect(calculate(expression)).toBe(-21);

        expression = '1+0.5';
        expect(calculate(expression)).toBe(1.5);

    });

    test('test expressions starting with "-" operator', () => {
        expression = '-1';
        expect(calculate(expression)).toBe(-1);

        expression = '-1-3';
        expect(calculate(expression)).toBe(-4);

        expression = '-1.5-3.2';
        expect(calculate(expression)).toBe(-4.7);
    });

    test('test expresions starting with wrong operators (*, /)', () => {
        expression = '*5';
        expect(calculate(expression)).toThrow();

        expression = '*4+2';
        expect(calculate(expression)).toThrow();

        expression = '/7';
        expect(calculate(expression)).toThrow();

        expression = '/1-6';
        expect(calculate(expression)).toThrow();
    });

    test('ignore trailing opreators', () => {
        expression = '1+4/2+4-';
        expect(calculate(expression)).toBe(7);
    });

    test('test divide by 0', () => {
        expression = '4/0';
        expect(calculate(expression)).toThrow();

        expression = '4/0+3';
        expect(calculate(expression)).toThrow();
    })

})