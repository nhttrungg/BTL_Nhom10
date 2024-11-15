const { checkName } = require('../lienhe.js');

describe('checkName function', () => {
    test('should return false for empty string', () => {
        expect(checkName('')).toBe(false);
    });
    test('should return false for null input', () => {
        expect(checkName(null)).toBe(false);
    });
    test('should return false for undefined input', () => {
        expect(checkName(undefined)).toBe(false);
    });
    test('should return true for name with spaces', () => {
        expect(checkName('Nguyen Van A')).toBe(true);
    });
    test('should return true for name with Vietnamese characters', () => {
        expect(checkName('Nguyễn Văn Á')).toBe(true);
    });
    test('should return false for name with numbers', () => {
        expect(checkName('Nguyen123')).toBe(false);
    });
    test('should return false for name with special characters', () => {
        expect(checkName('Nguyen@#')).toBe(false);
    });
});