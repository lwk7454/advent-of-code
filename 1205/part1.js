import fs from 'fs'
import { fileURLToPath } from 'url';

export function solve1(file) {
  let [status, actions] = fs.readFileSync(file, 'utf8').split("\n\n").map(l => l.split("\n").filter(e=>!!e))

  const stacks = []
  // init stacks
  const stacksCount = status.pop().split(' ').filter(e=>!!e).length // 3
  status = status.map(l => l.replaceAll('    ','0').replaceAll(/\W/g,'').split('')) // [['0','D','0'], ...]
  for(let i = 0; i < stacksCount; i++){
    stacks[i] = []
    for(let j = status.length - 1; j >= 0; j--) {
      if(!status[j][i]) break
      stacks[i].push(status[j][i])
    }
    stacks[i] = stacks[i].filter(e=>e!=='0')
  }

  actions.map(l => l.replaceAll(/[a-z]/g, ' ').split(' ').filter(e=>!!e).map(e=>parseInt(e))) // [[1,2,1], ...]
    .forEach(action => {
      for(let i = 0; i < action[0]; i++) stacks[action[2]-1].push(stacks[action[1]-1].pop())
    })

  const res = []
  stacks.forEach(s=>res.push(s.pop()))
  return res.join('')
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  console.log(solve1('1205/in.txt'))
}
