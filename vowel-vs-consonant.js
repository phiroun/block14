//a, e, i, o, u are considered vowels.
//every other letter is considered a consonant.
//define two variables that keep track of the number of consonants and vowels.
//"hello"
// //"ukelele"
// //"awesome"
// //"onomonopia"
// //"textbook "


function countLetters(word) {

    let consonantsCount = 0;
    let vowelsCount = 0;
 
    for (let i = 0; i < word.length; i++) {
    
      if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u') {
            vowelsCount++;
      } else {
        consonantsCount++;
      }
    }
  
    console.log(word + ' has ' + consonantsCount + ' consonants and ' + vowelsCount + ' vowels');
  }
    countLetters('hello');