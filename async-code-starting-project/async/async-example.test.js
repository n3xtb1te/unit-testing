import { describe, it, expect } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

it('should generate a token value', (done) => {
    const testUserEmail = 'test@test.com';

    generateToken(testUserEmail, (error, token) => {
        try {
            expect(token).toBeDefined();
            // expect(token).toBe(2);
            done();
        } catch(error) {
            done(error);
        }
    });
});

it('should generate a token value', () => {
    const testUserEmail = 'test@test.com';

    expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});

it('should generate a token value', async () => {
    const testUserEmail = 'test@test.com';

    const token = await generateTokenPromise(testUserEmail);
    expect(token).toBeDefined();
});