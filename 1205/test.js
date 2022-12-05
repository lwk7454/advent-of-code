import {solve1} from './part1.js'
import {solve2} from "./part2.js";

describe('Part 1', () => {
  test('Sample test', () => {
    expect(solve1('1205/sample.txt')).toEqual('CMZ')
  })
})

describe('Part 2', () => {
  test('Sample test', () => {
    expect(solve2('1205/sample.txt')).toEqual('MCD')
  })
})
