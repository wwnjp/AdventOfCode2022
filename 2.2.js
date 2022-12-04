const intify = _ => parseInt(_, 10),
   sum = _ => _.reduce((a, i) => a + i, 0),
   sortNums = (a, b) => a < b ? -1 : 1;

// ROCK PAPER SCISSORS
// A - Rock     (1pt)
// B - Paper    (2pt)
// C - Scissors (3pt)
//
// X - Loss    (0pts)
// Y - Draw    (3pts)
// Z - Win     (6pts)
//
// 0pts - loss
// 3pts - draw
// 6pts - win
// 
// A = X    B > X    C < X
// A < Y    B = Y    C > Y
// A > Z    B < Z    C = Z



const i = (require('fs')).readFileSync('./inputs/2.txt', 'utf-8').trim()
   .split('\n')
   .map(_ => _.split(' '))
   .map(_ => {
      const l = _[0];
      const r = _[1];
      let score = 0;

      if (r === 'X') score += 0;
      if (r === 'Y') score += 3;
      if (r === 'Z') score += 6;

      if (r === 'X') {
         if (l === 'A') score += 3;
         if (l === 'B') score += 1;
         if (l === 'C') score += 2;
      }
      else if (r === 'Y') {
         if (l === 'A') score += 1;
         if (l === 'B') score += 2;
         if (l === 'C') score += 3;
      }
      else if (r === 'Z') {
         if (l === 'A') score += 2;
         if (l === 'B') score += 3;
         if (l === 'C') score += 1;
      }

      return score;
   });

console.log('PART 2', i, sum(i));
