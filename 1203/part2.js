import fs from 'fs'

export function solve2(file) {
    const data = fs.readFileSync(file, 'utf8').split("\n")
    let result = 0

    for(let i = 0; i < data.length; i += 3) {
        const line1 = data[i].split('')
        const line2 = data[i+1].split('')
        const line3 = data[i+2].split('')
        let target
        line1.forEach((c) => {
            if(line2.indexOf(c) !== -1 && line3.indexOf(c) !== -1){
                target = c
                return false
            }
        })
        const code = target.charCodeAt(0)
        let res
        if(code < 97) res = code - 65 + 27
        else res = code - 97 + 1
        result += res
    }

    return result
}

console.log(solve2('1203/in.txt'))
