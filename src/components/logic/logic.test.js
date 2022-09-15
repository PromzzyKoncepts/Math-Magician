import calculate from './calculate';
import operate from './operate';

describe('Testing logic components' ,() => {
    test('Test the calculator logic', () => {
        const data = {
            total : 4,
            next : 6,
            operation : null
        };
        const value = {total : 6, next :null, operation:'+'};
        expect(calculate(data,'+')).toEqual(value);
    })
    test('Test subtraction with operator',() => {
        expect(operate(10,4,'-')).toBe('6');
    })
    test('Test mupltiplication with operator',() => {
        expect(operate(8,4,'x')).toBe('32');
    })
    test('Test division with operator',() => {
        expect(operate(8,4,'÷')).toBe('2');
    })
})