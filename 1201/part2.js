import fs from 'fs'
import math from 'math'

fs.readFile('./in.txt', 'utf8', (_, data) => {
  const res = data.split("\n\n")
    .map((elf) => math.sum(elf.split("\n").map((str) => parseInt(str))))
    .filter((v) => !!v)
    .sort((a, b) => b - a)
  console.log(res[0] + res[1] + res[2])
});
