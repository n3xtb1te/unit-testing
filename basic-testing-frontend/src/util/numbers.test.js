import { describe, it, expect } from 'vitest';
import { transformToNumber, cleanNumbers } from './numbers';

describe('transformToNumber', () => {
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
});

describe('cleanNumbers', () => {
    it('should return an array of number values if an array of string number values is provided', () => {
        const numberValues = ['22', '33', '44'];
    
        const cleanedNumbers = cleanNumbers(numberValues);

        expect(cleanedNumbers[0]).toBeTypeOf('number');
    });

    it('should throw an error if an array with at least one empty string is provided', () => {
        const numberValues = ['22', '33', ''];

        const resultFn = () => cleanNumbers(numberValues);

        expect(resultFn).toThrow('Invalid input - must not be empty.');
    });
});