import { black, red, green, yellow, blue, magenta, cyan, white } from './index.js';

const env = cyan(`[${typeof window === 'undefined' ? 'node' : 'jsdom'}]`);

describe(`log-in-color ${env}`, () => {
  test('black', () => {
    expect(black('test')).toEqual('\x1b[30mtest\x1b[0m');
  });
  test('red', () => {
    expect(red('test')).toEqual('\x1b[31mtest\x1b[0m');
  });
  test('green', () => {
    expect(green('test')).toEqual('\x1b[32mtest\x1b[0m');
  });
  test('yellow', () => {
    expect(yellow('test')).toEqual('\x1b[33mtest\x1b[0m');
  });
  test('blue', () => {
    expect(blue('test')).toEqual('\x1b[34mtest\x1b[0m');
  });
  test('magenta', () => {
    expect(magenta('test')).toEqual('\x1b[35mtest\x1b[0m');
  });
  test('cyan', () => {
    expect(cyan('test')).toEqual('\x1b[36mtest\x1b[0m');
  });
  test('white', () => {
    expect(white('test')).toEqual('\x1b[37mtest\x1b[0m');
  });

  test('tagging', () => {
    expect(green`One: ${1}; two: ${2}; three: ${3}.`).toEqual('\x1b[32mOne: 1; two: 2; three: 3.\x1b[0m');
  });
});
