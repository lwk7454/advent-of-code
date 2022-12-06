import fs from 'fs'
import { fileURLToPath } from 'url';

export function solve2(file) {
  const input = fs.readFileSync(file, 'utf8').replaceAll(/\W/g,'').split('')
  for(let i = 0; i < input.length-14; i++) if(input.slice(i, i+14).filter((v, i, self) => self.indexOf(v) === i).length === 14) return i+14
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  console.log(solve2('1206/in.txt'))
}
