
const dir = {};
let cwd = [];
let sum = [];
const _TARGET = 358913;

const du = (dir) => {
   let s = 0;
   for (const v in dir) {
      if (typeof dir[v] === 'object') {
         s += du(dir[v]);
      }
      else {
         s += dir[v];
      }
   }

   if (s > _TARGET) {
      sum.push(s);
   }
   return s;
};


function setValue(obj, path, value) {
  var a = path.split('.')
  var o = obj
  while (a.length - 1) {
    var n = a.shift()
    if (!(n in o)) o[n] = {}
    o = o[n]
  }
  o[a[0]] = value
}


const i = (require('fs')).readFileSync('inputs/7.txt', 'utf-8').trim()
   .split('\n')
   .map(_ => {
      const s = _.split(' ');

      if (s[0] === '$') {
         if (s[1] === 'cd') {
            if (s[2] === '..') {
               cwd.pop();
            } 
            else {
               cwd.push(s[2]);
            }
         }

         if (s[1] === 'ls') {
            // do nothing...?
         }
      }
      else {
         if (s[0] === 'dir') {
         }

         if (!isNaN(parseInt(s[0]))) {
            setValue(dir, [...cwd, s[1].replace('.', '_')].join('.'), parseInt(s[0]));
         }
      }
   });


console.log('DIR', dir);

console.log('DU', du(dir));

console.log('PART 1', sum.sort((a, b) => a < b ? -1 : 1)[0]);

