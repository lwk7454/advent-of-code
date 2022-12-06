import fs from 'fs'
import { fileURLToPath } from 'url';

export function solve1(file) {
  const input = fs.readFileSync(file, 'utf8').replaceAll(/\W/g,'').split('')
  for(let i = 0; i < input.length-4; i++) if(input.slice(i, i+4).filter((v, i, self) => self.indexOf(v) === i).length === 4) return i+4
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  console.log(solve1('1206/in.txt'))
}
