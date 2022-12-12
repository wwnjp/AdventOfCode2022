
const _ROUNDS = 10000;

const intify = _ => parseInt(_, 10);
const updateWorry = (_, f) => _ % f;
//const updateWorry = _ => Math.floor(_ / 3);
const sortNums = (a, b) => a < b ? -1 : 1;


const monkeys = (require('fs')).readFileSync('inputs/11.txt', 'utf-8').trim()
   .split('\n\n')
   .map(_ => {
      const __ = _.split('\n');
      return {
         items: __[1].replaceAll('Starting items: ', '').trim().split(', ').map(intify),
         op: __[2].replaceAll('Operation: new = ', '').trim(),
         test: parseInt(__[3].replaceAll('Test: divisible by', '').trim()),
         yes: parseInt(__[4].replaceAll('If true: throw to monkey ', '').trim()),
         no: parseInt(__[5].replaceAll('If false: throw to monkey ', '').trim()),
         inspect: 0
      };
   });


const mm = monkeys.reduce((a, b) => a * b.test, 1);

for (let _r = 0; _r < _ROUNDS; _r++) {
   //console.log('_____________ ROUND ', _r, '________________');
   monkeys.forEach((m, x) => {
      const operation = (z) => eval(m.op.replaceAll('old', z));

      while (m.items.length > 0) {
         const i = m.items.shift();
         //console.log('\tinspecting item', i);
         const w = operation(i);
         //console.log('\tupdating worry', w, m.op.replaceAll('old', x));
         const newWorry = updateWorry(w, mm);
         //console.log('\tnew worry', newWorry);
         m.inspect ++;

         //console.log('\ttest is', m.test);

         if (newWorry % m.test === 0) {
            //console.log('\t YES, Throwing to ', m.yes);
            monkeys[m.yes].items.push(newWorry);
         } else {
            //console.log('\t NO, Throwing to ', m.no);
            monkeys[m.no].items.push(newWorry);
         }
      }
   });
}


const inspections = monkeys.map(m => m.inspect).sort(sortNums);
console.log('INSPECTIONs', monkeys.map(m => m.inspect));
console.log('>>.', inspections.slice(-2).reduce((a, i) => a * i, 1))
