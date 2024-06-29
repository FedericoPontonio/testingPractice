import {capitalize, reverseString, calculator, caesarCipher, analyzeArray} from "./index.js";

test('capitalizes first letter of a string', () => {
  expect(capitalize('domenico vieni qui.')).toBe('Domenico vieni qui.');
});

test('returns string reversed', () => {
  expect(reverseString('domenico vieni qui.')).toBe('.iuq ineiv ocinemod');
});

test('returns correct value for each operation', () => {
  expect(calculator.add(3,2)).toBe(5);
  expect(calculator.subtruct(3,2)).toBe(1);
  expect(calculator.multiply(3,2)).toBe(6);
  expect(calculator.divide(3,2)).toBe(1.5);
});

test('returns string with the characters shifted by a given number', () => {
  expect(caesarCipher('buon, gioRno?', 6)).toBe('haut, mouXtu?');
});
test('returns string with the characters shifted by a given number', () => {
  expect(caesarCipher('!SANDOKAnnn,', 6)).toBe('!YGTJUQGttt,');
});
test('returns string with the characters shifted by a given number', () => {
  expect(caesarCipher('ugonotto', 6)).toBe('amutuzzu');
});
test('returns string with the characters shifted by a given number', () => {
  expect(caesarCipher('GIAGNOGLIo', 12)).toBe('SUMSZASXUa');
});
test('returns string with the characters shifted by a given number', () => {
  expect(caesarCipher('ZANZIBARyes', 10)).toBe('JKXJSLKBioc');
});

test('takes numbers and returns their: average, min, max, and length.', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({average:4, min:1, max:8, length:6});
});
test('takes numbers and returns their: average, min, max, and length.', () => {
  expect(analyzeArray([1000, 0, 25, 87, 5])).toEqual({average:223.4, min:0, max:1000, length:5});
});