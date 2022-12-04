/*
PART 2

As you finish identifying the misplaced items, the Elves come to you with another issue.

For safety, the Elves are divided into groups of three. Every Elf carries a badge that identifies their group. For 
efficiency, within each group of three Elves, the badge is the only item type carried by all three Elves. That is, 
if a group's badge is item type B, then all three Elves will have item type B somewhere in their rucksack, and at 
most two of the Elves will be carrying any other item type.

The problem is that someone forgot to put this year's updated authenticity sticker on the badges. All of the badges 
need to be pulled out of the rucksacks so the new authenticity stickers can be attached.

Additionally, nobody wrote down which item type corresponds to each group's badges. The only way to tell which item 
type is the right one is by finding the one item type that is common between all three Elves in each group.
Every set of three lines in your list corresponds to a single group, but each group can have a different badge item 
type. So, in the above example, the first group's rucksacks are the first three lines:

vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg

And the second group's rucksacks are the next three lines:

wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw

In the first group, the only item type that appears in all three rucksacks is lowercase r; this must be their badges. 
In the second group, their badge item type must be Z.

Priorities for these items must still be found to organize the sticker attachment efforts: here, they are 18 (r) for 
the first group and 52 (Z) for the second group. The sum of these is 70.

Find the item type that corresponds to the badges of each three-Elf group. What is the sum of the priorities of those 
item types?

*/

const sum = _ => _.reduce((a, i) => a + i, 0);

// i2 will store the groups of 3 as arrays, we can push into this
// based on the original index of Math.floor(index / 3) (or ~~)
const i2 = [];
const i = (require('fs')).readFileSync('./inputs/3.txt', 'utf-8').trim().split('\n')
   .forEach((_, i) => {
      // i2i is the index of i2 that we want to add to
      const i2i = ~~(i / 3);
      // if i2[i2i] hasn't been filled in yet, initialize it with the value, 
      // otherwise, push it on
      // could be written more verbosely, but this is nice an unreadable :)
      //
      // if (i2[i2i] === undefined) {
      //    i2[i2i] = [];
      // }
      // i2[i2i].push(_);
      //
      i2[i2i] = !i2[i2i] ? [_] : [...i2[i2i], _]
   });


// Now that we have our arrays split, we need to find the char common
// in all 3 elements. We can assume that there will be one (and only one) duplicate char
// so we can optimize be using the shortest array in the list, splice it out of the original
// and .includes() in the other 2 strings
const out = i2.map(_ => {
      let s = 0;
      _.forEach((__, i) => s = __.length < _[s].length ? i : s);
      const _2 = _.splice(s, 1)[0];

      for (let i = 0; i < _2.length; i++) {
         if (_[0].includes(_2[i]) && _[1].includes(_2[i])) {
            return _2[i];
         }
      }
   })
   .map(_ => _.charCodeAt(0) - 96)
   .map(_ => _ < 0 ? _ + 58 : _);


console.log('PART 2', sum(out));

