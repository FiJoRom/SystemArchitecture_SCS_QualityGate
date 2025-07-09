import { add, subtract } from './math.js';

describe('math utils', () => {
  it('should add numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should subtract numbers', () => {
    expect(subtract(5, 2)).toBe(3);
  });
});
