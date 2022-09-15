import calculate from './calculate';
import operate from './operate';

describe('Testing logic components' ,() => {
    test('Test the calculator logic', () => {
        const data = {
            total : 4,
            next : 6,
            operation : null
        };
        const value = {total : 3, next :null, operation:'+'};
        expect(calculate(data,'+').toEqual(value));
    })
})