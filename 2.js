const intify = _ => parseInt(_, 10),
   sum = _ => _.reduce((a, i) => a + i, 0),
   sortNums = (a, b) => a < b ? -1 : 1;

// ROCK PAPER SCISSORS
// A - Rock
// B - Paper
// C - Scissors
//
// X - Rock     (1pt)
// Y - Paper    (2pt)
// Z - Scissors (3pt)
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

      if (r === 'X') score += 1;
      if (r === 'Y') score += 2;
      if (r === 'Z') score += 3;

      if ((l === 'A' && r === 'X') ||
          (l === 'B' && r === 'Y') ||
          (l === 'C' && r === 'Z')) score += 3;

      else if ((l === 'A' && r === 'Y') ||
               (l === 'B' && r === 'Z') ||
               (l === 'C' && r === 'X')) score += 6;

      return score;
   });



console.log('PART 1', i, sum(i));
