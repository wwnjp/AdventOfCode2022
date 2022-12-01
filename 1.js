const intify = _ => parseInt(_, 10),
   sum = _ => _.reduce((a, i) => a + i, 0),
   sortNums = (a, b) => a < b ? -1 : 1;

const i = (require('fs')).readFileSync('./inputs/1.txt', 'utf-8').trim()
   .split('\n\n')
   .map(_ => _.split('\n').map(intify))
   .map(sum)
   .sort(sortNums)
   .slice(-3);

console.log('PART 1', i.slice(-1));
console.log('PART 2', sum(i));
