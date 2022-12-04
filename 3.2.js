const intify = _ => parseInt(_, 10),
   sum = _ => _.reduce((a, i) => a + i, 0),
   sortNums = (a, b) => a < b ? -1 : 1;


const o = [];

const i = (require('fs')).readFileSync('./inputs/3.txt', 'utf-8').trim()
   .split('\n')
   .forEach((_, i) => {
      const oi = ~~(i / 3);
      if (!o[oi]) {
         o[oi] = [];
      }
      o[oi].push(_);
   });

const o2 = o.map(_ => {
      let s = 0;
      _.forEach((__, i) => s = __.length < _[s].length ? i : s);
      const _2 = _.splice(s, 1)[0];

      for (let i = 0; i < _2.length; i++) {
         if (_[0].includes(_2[i]) && _[1].includes(_2[i])) {
            return _2[i];
         }
      }
   })
   .map(_ => _.charCodeAt(0) - 96 < 0 ? _.charCodeAt(0) - 38 : _.charCodeAt(0) - 96);


console.log('PART 2', sum(o2));

