import fs from 'fs'
import math from 'math'

fs.readFile('./in.txt', 'utf8', (_, data) => {
  const mapHands = {X: 'A', Y: 'B', Z: 'C'}
  const mapBeats = {A: 'C', B: 'A', C: 'B'}
  const mapHandScore = {X: 1, Y: 2, Z: 3}
  const games = data.split("\n")
  const res = games
    .filter((g) => !!g)
    .map((g) => {
      const hands = g.split(' ')
      let score = 0
      if (mapBeats[mapHands[hands[1]]] === hands[0]) {
        score = 6
      } else if (hands[0] === mapHands[hands[1]]) {
        score = 3
      }
      return score + mapHandScore[hands[1]]
    })
  console.log(math.sum(res))
});
