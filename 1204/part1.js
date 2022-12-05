import fs from 'fs'

export function solve1(file) {
  const data = fs.readFileSync(file, 'utf8').split("\n").filter((l) => !!l)
  let count = 0
  const contains = (elf1, elf2) => {
    return elf1[0] <= elf2[0] && elf1[1] >= elf2[1]
  }
  data.forEach((line) => {
    const pair = line.split(',').map((elf) => elf.split('-').map((s) => parseInt(s))) // [[2,4],[6,8]]
    if(contains(pair[0], pair[1]) || contains(pair[1], pair[0])) count ++;
  })
  return count
}

console.log(solve1('1204/in.txt'))
