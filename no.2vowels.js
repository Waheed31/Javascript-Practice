function vowel(str) {
  let string = str;
  let count = 0;

  if (typeof string === "string") {
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "u"];
    console.log(string?.length);

    for (let i = 0; i < string?.length; i++) {
      if (vowels?.includes(string[i])) {
        count++;
      }
    }
    return count;
  }
}

console.log(vowel("javascript"));

//another method

function vow(string) {
  let counts = 0;
  if (typeof string === "string") {
    string = string?.toLowerCase()
    for (let i = 0; i < string?.length; i++) {
      if (
        string[i] == "a" ||
        string[i] == "e" ||
        string[i] == "i" ||
        string[i] == "o" ||
        string[i] == "u"
      ) {
        counts++;
      }
    }

  }
  else{
    return "Please enter string value only"
  }
  
  return counts;
}
let string = "aeioud" ;
console.log(vow(string));
