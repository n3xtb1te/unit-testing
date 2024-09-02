import { describe, it, expect } from 'vitest';
import { HttpError, ValidationError } from './errors';

describe('HttpError', () => {
    it('should contain provided statusCode, message, data', () => {
        const testStatusCode = 404;
        const testMessage = 'Test message';
        const testData = { test: 'data' };
    
        const error = new HttpError(testStatusCode, testMessage, testData);
    
        expect(error.statusCode).toBe(testStatusCode);
        expect(error.message).toBe(testMessage);
        expect(error.data).toBe(testData);
    });

    it('should create an instance of HttpError', () => {
        const testStatusCode = 404;
        const testMessage = 'Test message';
        const testData = { test: 'data' };
    
        const error = new HttpError(testStatusCode, testMessage, testData);
    
        expect(error instanceof HttpError).toBe(true);
    });

    it('should contain undefined as data if no data is provided', () => {
        const error = new HttpError();
    
        expect(error.statusCode).toBeUndefined();
        expect(error.message).toBeUndefined();
        expect(error.data).toBeUndefined();
    });
});

describe('ValidationError', () => {
    it('should contain provided message', () => {
        const testMessage = 'Test message';
    
        const error = new ValidationError(testMessage);
    
        expect(error.message).toBe(testMessage);
    });

    it('should create an instance of ValidationError', () => {
        const testMessage = 'Test message';

        const error = new ValidationError(testMessage);

        expect(error instanceof ValidationError).toBe(true);
    });

    it('should contain undefined as message if no message is provided', () => {
        const error = new ValidationError();

        expect(error.message).toBeUndefined();
    });
});
