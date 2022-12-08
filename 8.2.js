const intify = _ => parseInt(_, 10);

const numVisible = (map, y, x, dirX, dirY) => {
   const t = map[y][x];
   let ret = 0;

   if (dirX === 1) {
      for (let x2 = x + dirX; x2 < map[x].length; x2 += dirX) {
         ret++;
         if (map[y][x2] >= t) {
            break;
         }
      }
   }
   else if (dirX === -1) {
      for (let x2 = x + dirX; x2 >= 0; x2 += dirX) {
         ret++;
         if (map[y][x2] >= t) {
            break;
         }
      }
   }
   else if (dirY === 1) {
      for (let y2 = y + dirY; y2 < map.length; y2 += dirY) {
         ret++;
         if (map[y2][x] >= t) {
            break;
         }
      }
   }
   else if (dirY === -1) {
      for (let y2 = y + dirY; y2 >= 0; y2 += dirY) {
         ret++;
         if (map[y2][x] >= t) {
            break;
         }
      }
   }

   return ret;
};

let sum = 0;

const trees = (require('fs')).readFileSync('inputs/8.txt', 'utf-8').trim()
   .split('\n')
   .map(_ => _.split('').map(intify))
   .map((_, y, a) => 
      _.map((__, x) => 
         numVisible(a, y, x, 1, 0) *
         numVisible(a, y, x, -1, 0) *
         numVisible(a, y, x, 0, 1) *
         numVisible(a, y, x, 0, -1)
      ))
   .forEach(_ => {
      sum = Math.max(sum, ..._);
   });

console.log('PART 2', sum);
