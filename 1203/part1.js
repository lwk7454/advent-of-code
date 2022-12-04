import fs from 'fs'
import math from 'math'

export function solve1(file) {
  const data = fs.readFileSync(file, 'utf8').split("\n")
  const result = data.map((line) => {
    const chars = line.split('')
    const pack1 = chars.slice(0, line.length / 2)
    const pack2 = chars.slice(line.length / 2)
    let target
    pack1.forEach((char) => {
      if (pack2.indexOf(char) !== -1) {
        target = char
        return false
      }
    })
    const code = target.charCodeAt(0)
    let res
    if (code < 97) res = code - 65 + 27
    else res = code - 97 + 1
    return res
  })
  return math.sum(result)
}

console.log(solve1('1203/in.txt'))
