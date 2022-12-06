/*
--- Part Two ---

The Elf finishes helping with the tent and sneaks back over to you. "Anyway, the second column says how the round needs to end: X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win. Good luck!"

The total score is still calculated in the same way, but now you need to figure out what shape to choose so the round ends as indicated. The example above now goes like this:

    In the first round, your opponent will choose Rock (A), and you need the round to end in a draw (Y), so you also choose Rock. This gives you a score of 1 + 3 = 4.
    In the second round, your opponent will choose Paper (B), and you choose Rock so you lose (X) with a score of 1 + 0 = 1.
    In the third round, you will defeat your opponent's Scissors with Rock for a score of 1 + 6 = 7.

Now that you're correctly decrypting the ultra top secret strategy guide, you would get a total score of 12.

Following the Elf's instructions for the second column, what would your total score be if everything goes exactly according to your strategy guide?

*/

const intify = _ => parseInt(_, 10),
   sum = _ => _.reduce((a, i) => a + i, 0),
   sortNums = (a, b) => a < b ? -1 : 1;

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
