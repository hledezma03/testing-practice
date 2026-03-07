import { reverseString } from './reverseString';

test('reverseString should reverse the input string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
    expect(reverseString('')).toBe('');
    expect(reverseString('a')).toBe('a');
})