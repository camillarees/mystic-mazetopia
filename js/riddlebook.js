'use strict';

function Riddle(dialogue, answer, hint, id) {
  this.dialogue = dialogue;
  this.answer = answer;
  this.hint = hint;
  this.id = id;
}

const riddle1 = new Riddle(
  'I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?',
  'echo',
  'Hint: Think about sound and its characteristics.',
  'riddle1'
);

const riddle2 = new Riddle(
  'What has keys but can\'t open locks?',
  'piano',
  'Hint: It is a musical instrument.',
  'riddle2'
);

const riddle3 = new Riddle(
  'I am taken from a mine and shut in a wooden case from which I am never released. What am I?',
  'coal',
  'Hint: It is a source of energy.',
  'riddle3'
);

const riddle4 = new Riddle(
  'What goes up but never comes down?',
  'age',
  'Hint: It is related to the passage of time.',
  'riddle4'
);

const riddle5 = new Riddle(
  'What has cities, but no houses; forests, but no trees; and rivers, but no water?',
  'map',
  'Hint: It provides a representation of something.',
  'riddle5'
);

const riddle6 = new Riddle(
  'I have keys but no locks. I have space but no room. You can enter, but can\'t go outside. What am I?',
  'keyboard',
  'Hint: It is a device used for inputting information.',
  'riddle6'
);

const riddle7 = new Riddle(
  'I can be cracked, made, told, and played. What am I?',
  'joke',
  'Hint: It is a form of entertainment that often involves humor.',
  'riddle7'
);

const riddle8 = new Riddle(
  'I am always hungry, I must be fed. The finger I touch will soon turn red. What am I?',
  'fire',
  'Hint: It is a natural element that requires fuel.',
  'riddle10'
);

const riddle9 = new Riddle(
  'I am an odd number. Take away one letter and I become even. What number am I?',
  'seven',
  'Hint: The word "even" is a clue.',
  'riddle12'
);

const riddle10 = new Riddle(
  'What has a heart that doesn\'t beat?',
  'artichoke',
  'Hint: It is a type of vegetable.',
  'riddle13'
);

const riddle11 = new Riddle(
  'The more you have of me, the less you see. What am I?',
  'darkness',
  'Hint: It is the absence of light.',
  'riddle14'
);

const riddle12 = new Riddle(
  'I can fly without wings. I can cry without eyes. Wherever I go, darkness follows me. What am I?',
  'cloud',
  'Hint: It is a meteorological phenomenon.',
  'riddle16'
);

const riddle13 = new Riddle(
  'What has a face that does not frown, hands that do not wave, and runs but stays in place?',
  'clock',
  'Hint: It is a timekeeping device.',
  'riddle17'
);

const riddle14 = new Riddle(
  'I have a head and a tail but no body. What am I?',
  'coin',
  'Hint: It is a form of currency.',
  'riddle19'
);

const riddle15 = new Riddle(
  'What is always in front of you but can\'t be seen?',
  'future',
  'Hint: It relates to the concept of time.',
  'riddle20'
);

const riddle16 = new Riddle(
  'What has a face that never changes, even when its clothes change?',
  'doll',
  'Hint: It is a toy that resembles a human.',
  'riddle21'
);

const riddle17 = new Riddle(
  'I am taken from a mine and shut in a wooden case. I am put to work with a flick, yet I never get tired. What am I?',
  'matchstick',
  'Hint: It is a small object used for creating fire.',
  'riddle22'
);

const riddle18 = new Riddle(
  'I have keys but no locks. I have space but no rooms. You can enter, but can\'t go outside. What am I?',
  'keyboard',
  'Hint: It is an input device for computers.',
  'riddle23'
);

const riddle19 = new Riddle(
  'I am full of holes but can still hold water. What am I?',
  'sponge',
  'Hint: It is an absorbent material.',
  'riddle24'
);

const riddle20 = new Riddle(
  'What has to be broken before you can use it?',
  'egg',
  'Hint: It is a fragile object containing something inside.',
  'riddle25'
);

const riddle21 = new Riddle(
  'What has a neck but no head?',
  'bottle',
  'Hint: It is a container for liquids.',
  'riddle26'
);

const riddle22 = new Riddle(
  'What is always coming but never arrives?',
  'tomorrow',
  'Hint: It relates to the concept of time and the future.',
  'riddle28'
);

const riddle23 = new Riddle(
  'What has a thumb and four fingers but is not a hand?',
  'glove',
  'Hint: It is an item worn on the hand for protection or warmth.',
  'riddle29'
);

const riddle24 = new Riddle(
  'The more you take, the more you leave behind. What am I?',
  'footsteps',
  'Hint: It is related to movement.',
  'riddle30'
);

let riddleArr = [];
riddleArr.push(
  riddle1,
  riddle2,
  riddle3,
  riddle4,
  riddle5,
  riddle6,
  riddle7,
  riddle8,
  riddle9,
  riddle10,
  riddle11,
  riddle12,
  riddle13,
  riddle14,
  riddle15,
  riddle16,
  riddle17,
  riddle18,
  riddle19,
  riddle20,
  riddle21,
  riddle22,
  riddle23,
  riddle24
);

