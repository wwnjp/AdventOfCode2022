const intify = _ => parseInt(_, 10);

const isVisible = (map, x, y, dirX, dirY) => {
   const t = map[x][y];
   let ret = true;

   if (dirX === 1) {
      for (let x2 = x + 1; x2 < map[x].length; x2++) {
         if (map[x2][y] >= t) {
            ret = false;
         }
      }
   }
   else if (dirX === -1) {
      for (let x2 = x - 1; x2 >= 0; x2--) {
         if (map[x2][y] >= t) {
            ret = false;
         }
      }
   }
   else if (dirY === 1) {
      for (let y2 = y + 1; y2 < map.length; y2++) {
         if (map[x][y2] >= t) {
            ret = false;
         }
      }
   }
   else if (dirY === -1) {
      for (let y2 = y - 1; y2 >= 0; y2--) {
         if (map[x][y2] >= t) {
            ret = false;
         }
      }
   }

   return ret;
};

let sum = 0;

const trees = (require('fs')).readFileSync('inputs/8.txt', 'utf-8').trim()
   .split('\n')
   .map(_ => _.split('').map(intify))
   .map((_, x, a) => 
      _.map((__, y) => 
         isVisible(a, x, y, 1, 0) || 
         isVisible(a, x, y, -1, 0) ||
         isVisible(a, x, y, 0, 1) ||
         isVisible(a, x, y, 0, -1)
      ))
   .forEach(_ => {
      sum += _.filter(__ => __).length;
   });

console.log('PART 1', sum);
