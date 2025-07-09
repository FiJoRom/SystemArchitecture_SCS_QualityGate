import {
  problematicFunction,
  getUserName,
  execute,
  unusedBranch,
  duplicateExample,
} from './demo-problems';

describe('demo-problems', () => {
  it('problematicFunction works', () => {
    expect(problematicFunction('test')).toBe('testtesttesttesttest');
  });

  it('getUserName handles valid input', () => {
    expect(getUserName({ name: 'Finn' })).toBe('FINN');
  });

  it('execute runs code (dangerous)', () => {
    expect(execute('2 + 2')).toBe(4);
  });

  it('unusedBranch returns correct string', () => {
    expect(unusedBranch(true)).toBe('on');
    expect(unusedBranch(false)).toBe('off');
  });

  it('duplicateExample logs something', () => {
    console.log = jest.fn(); // oder jest.fn()
    duplicateExample();
    expect(console.log).toHaveBeenCalledWith('This is duplicate code');
  });
});
