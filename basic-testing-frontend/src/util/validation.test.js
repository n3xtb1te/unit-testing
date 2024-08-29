import { it, expect, describe } from 'vitest';
import { validateStringNotEmpty, validateNumber } from './validation';

describe('validateStringNotEmpty', () => {
    it('should throw an error if an empty string is provided', () => {
        const emptyString = '';

        const resultFn = () => validateStringNotEmpty(emptyString);

        expect(resultFn).toThrow('Invalid input - must not be empty.');
    });

    it('should not throw an error if a non-empty string is provided', () => {
        const nonEmptyString = 'test';

        const resultFn = () => validateStringNotEmpty(nonEmptyString);

        expect(resultFn).not.toThrow();
    });

    it('should throw an error if a string with only whitespaces is provided', () => {
        const stringWithWhitespaces = '     ';

        const resultFn = () => validateStringNotEmpty(stringWithWhitespaces);

        expect(resultFn).toThrow('Invalid input - must not be empty.');
    });

    it('should not throw an error if a string with whitespaces at the beginning and end is provided', () => {
        const stringWithWhitespaces = '     test     ';

        const resultFn = () => validateStringNotEmpty(stringWithWhitespaces);

        expect(resultFn).not.toThrow();
    });
});

describe('validateNumber', () => {
    it('should throw an error if a string is provided', () => {
        const string = 'test';

        const resultFn = () => validateNumber(string);

        expect(resultFn).toThrow('Invalid number input.');
    });

    it('should not throw an error if a number is provided', () => {
        const number = 1;

        const resultFn = () => validateNumber(number);

        expect(resultFn).not.toThrow();
    });

    it('should not throw an error if a numeric string is provided', () => {
        const numericString = '1';

        const resultFn = () => validateNumber(numericString);

        expect(resultFn).toThrow('Invalid number input.');
    });

    it('should throw an error if a boolean is provided', () => {
        const boolean = true;

        const resultFn = () => validateNumber(boolean);

        expect(resultFn).toThrow('Invalid number input.');
    });

    it('should throw an error if an object is provided', () => {
        const object = {};

        const resultFn = () => validateNumber(object);

        expect(resultFn).toThrow('Invalid number input.');
    });

    it('should throw an error if NaN is provided', () => {
        const nan = NaN;

        const resultFn = () => validateNumber(nan);

        expect(resultFn).toThrow('Invalid number input.');
    });
});