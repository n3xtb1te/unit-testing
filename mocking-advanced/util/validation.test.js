import { it, expect } from 'vitest';
import { validateNotEmpty } from './validation';

it('should throw an error if text is empty', () => {
    const testText = '';
    const testErrorMessage = 'Test error message';

    const validationFn = () => validateNotEmpty(testText, testErrorMessage);

    expect(validationFn).toThrowError(testErrorMessage);
});

it('should throw an error if text is only whitespace', () => {
    const testText = '  ';
    const testErrorMessage = 'Test error message';

    const validationFn = () => validateNotEmpty(testText, testErrorMessage);

    expect(validationFn).toThrowError(testErrorMessage);
});

it('should not throw an error if text is not empty', () => {
    const testText = 'Test text';
    const testErrorMessage = 'Test error message';

    const validationFn = () => validateNotEmpty(testText, testErrorMessage);

    expect(validationFn).not.toThrow();
});

it('should not throw an error if text is not empty and has whitespace', () => {
    const testText = '  Test text  ';
    const testErrorMessage = 'Test error message';

    const validationFn = () => validateNotEmpty(testText, testErrorMessage);

    expect(validationFn).not.toThrow();
});