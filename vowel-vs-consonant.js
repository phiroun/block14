//a, e, i, o, u are considered vowels.
//every other letter is considered a consonant.
//define two variables that keep track of the number of consonants and vowels.
//"hello"
function vowelCount(str) {
    let count = 0;
    let vowels = "aeiou";
    let consonants = "bcdfghjklmnpqrstvwxyz"

    for (let i = 0; i < str.legnth; i++){
        if (vowels.indexOf(str[i].toLowerCase()) > -1){
            count++;
        }
        return """ has" + count + vowels
    }
}
//"ukelele"
//"awesome"
//"onomonopia"
//"textbook "