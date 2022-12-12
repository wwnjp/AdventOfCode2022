
let cycle = 0;
let reg = 1;
let addXTime = 2;
let pos = 0;
let row = 0;
const screen = [[]];
const o = [];

const updateCycle = () => {
      cycle++;
      pos++;

      if (cycle % 40 === 20) {
         console.log('CYCLE CHECK', cycle, reg, cycle * reg);
         o.push(cycle * reg);
      }

      screen[row].push((pos >= reg - 0 && pos <= reg + 2) ? '#' : '.');
      if (pos % 40 === 0) {
         screen[++row] = [];
         pos = 0;
      }
};

const i = (require('fs')).readFileSync('inputs/10.txt', 'utf-8').trim()
   .split('\n')
   .forEach(_ => {
      const [inst, v] = _.split(' ');

      if (inst === 'noop') {
         updateCycle();
      } 
      else {
         while(addXTime-- > 0) {
            updateCycle();
         }

         addXTime = 2;
         reg += parseInt(v);
      }
   });

console.log('PART 1', o.reduce((a, i) => a + i, 0));
console.log('PART 2', screen.map(_ => _.join('')));
