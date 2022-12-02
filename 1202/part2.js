import fs from 'fs'
import math from 'math'

fs.readFile('./in.txt', 'utf8', (_, data) => {
  const mapBeats = {A: 'C', B: 'A', C: 'B'}
  const mapHandScore = {A: 1, B: 2, C: 3}
  const mapBeatsHandScore = {A: 2, B: 3, C: 1}
  const games = data.split("\n")
  const res = games
    .filter((g) => !!g)
    .map((g) => {
      const line = g.split(' ')
      let score
      if(line[1] === 'X') {
        score = 0 + mapHandScore[mapBeats[line[0]]]
      } else if(line[1] === 'Y') {
        score = 3 + mapHandScore[line[0]]
      } else {
        score = 6 + mapBeatsHandScore[line[0]]
      }
      return score
    })
  console.log(math.sum(res))
});
