import {solve1} from './part1.js'
import {solve2} from "./part2.js";

describe('Part 1', () => {
  test('Sample test', () => {
    expect(solve1('1206/sample0.txt')).toEqual(7)
    expect(solve1('1206/sample1.txt')).toEqual(5)
    expect(solve1('1206/sample2.txt')).toEqual(6)
    expect(solve1('1206/sample3.txt')).toEqual(10)
    expect(solve1('1206/sample4.txt')).toEqual(11)
  })
})

describe('Part 2', () => {
  test('Sample test', () => {
    expect(solve2('1206/sample0.txt')).toEqual(19)
    expect(solve2('1206/sample1.txt')).toEqual(23)
    expect(solve2('1206/sample2.txt')).toEqual(23)
    expect(solve2('1206/sample3.txt')).toEqual(29)
    expect(solve2('1206/sample4.txt')).toEqual(26)
  })
})
