import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

it('should transform a numeric string to a number', () => {
    const string = '22';

    const result = transformToNumber(string);

    expect(result).toBeTypeOf('number');
});

it('should transform a negative numeric string to a number', () => {
    const string = '-22';

    const result = transformToNumber(string);

    expect(result).toBeTypeOf('number');
});

it('should yield NaN for a non-numeric string to a number', () => {
    const string = 'invalid';

    const result = transformToNumber(string);

    expect(result).toBeNaN();
});
