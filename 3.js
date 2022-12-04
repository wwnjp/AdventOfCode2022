const intify = _ => parseInt(_, 10),
   sum = _ => _.reduce((a, i) => a + i, 0),
   sortNums = (a, b) => a < b ? -1 : 1;

const i = (require('fs')).readFileSync('./inputs/3.txt', 'utf-8').trim()
   .split('\n')
   .map(_ => {
      for (let i = 0; i < _.length / 2; i++) {
         for (let j = _.length / 2; j < _.length; j++) {
            if (_[i] === _[j]) {
               return _[i];
            }
         }
      }
   })
   .map(_ => _.charCodeAt(0) - 96 < 0 ? _.charCodeAt(0) - 38 : _.charCodeAt(0) - 96);



console.log('PART 1', sum(i));

