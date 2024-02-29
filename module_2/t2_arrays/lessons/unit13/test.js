import makeCensored from "../unit13/unit13.js";

const sentence = 'When you play the game of thrones, you win or you die';
console.log(makeCensored(sentence, ['die', 'play']));
const sentence2 = 'chicken chicken? chicken! chicken';
console.log(makeCensored(sentence2, ['?', 'chicken']));
