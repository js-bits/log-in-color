import { black, red, green, yellow, blue, magenta, cyan, white, css } from './index.js';
// import { black, red, green, yellow, blue, magenta, cyan, white, css } from './dist/index.cjs';
// const { black, red, green, yellow, blue, magenta, cyan, white, css } = require('./dist/index.cjs');

describe('log-in-color', () => {
  test('black', () => {
    expect(black('test')).toEqual('\x1b[30mtest\x1b[0m');
    expect(black`test`).toEqual('\x1b[30mtest\x1b[0m');
  });
  test('red', () => {
    expect(red('test')).toEqual('\x1b[31mtest\x1b[0m');
    expect(red`test`).toEqual('\x1b[31mtest\x1b[0m');
  });
  test('green', () => {
    expect(green('test')).toEqual('\x1b[32mtest\x1b[0m');
    expect(green`test`).toEqual('\x1b[32mtest\x1b[0m');
  });
  test('yellow', () => {
    expect(yellow('test')).toEqual('\x1b[33mtest\x1b[0m');
    expect(yellow`test`).toEqual('\x1b[33mtest\x1b[0m');
  });
  test('blue', () => {
    expect(blue('test')).toEqual('\x1b[34mtest\x1b[0m');
    expect(blue`test`).toEqual('\x1b[34mtest\x1b[0m');
  });
  test('magenta', () => {
    expect(magenta('test')).toEqual('\x1b[35mtest\x1b[0m');
    expect(magenta`test`).toEqual('\x1b[35mtest\x1b[0m');
  });
  test('cyan', () => {
    expect(cyan('test')).toEqual('\x1b[36mtest\x1b[0m');
    expect(cyan`test`).toEqual('\x1b[36mtest\x1b[0m');
  });
  test('white', () => {
    expect(white('test')).toEqual('\x1b[37mtest\x1b[0m');
    expect(white`test`).toEqual('\x1b[37mtest\x1b[0m');
  });

  test('tagging', () => {
    expect(green`One: ${1}; two: ${2}; three: ${3}.`).toEqual('\x1b[32mOne: 1; two: 2; three: 3.\x1b[0m');
    expect(`One: ${red`1`}; two: ${green`2`}; three: ${blue`3`}.`).toEqual(
      'One: \x1b[31m1\x1b[0m; two: \x1b[32m2\x1b[0m; three: \x1b[34m3\x1b[0m.'
    );
  });
  test('css', () => {
    expect(css(`RGB: ${red`red`}; ${green`green`}; ${blue`blue`}.`)).toEqual([
      'RGB: %cred%c; %cgreen%c; %cblue%c.',
      'color: red;',
      'color: normal;',
      'color: green;',
      'color: normal;',
      'color: blue;',
      'color: normal;',
    ]);
  });
});
