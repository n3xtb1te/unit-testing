import { it, expect, vi } from 'vitest';
import { promises as fs } from 'fs'; 

import writeData from './io';

vi.mock('fs');

it('should execute the writeFile method', async () => {
    const testData = 'Test';
    const testFileName = 'test.txt';

    writeData(testData, testFileName);
    expect(fs.writeFile).toBeCalled();
});