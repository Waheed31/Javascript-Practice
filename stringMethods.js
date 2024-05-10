//Length Property
//It returns the length of the string
let tex = "Abcdefghi"
console.log(tex.length)

//slice
//it takes two parameters start position and end position(end not included)
let text = "Apple, Banana, Kiwi";
let slicedPart = text.slice(7,13)
console.log(slicedPart)
//when we omit the second parameter ,the method will slice out the rest of the strings
let sl1 = text.slice(7)
console.log(sl1);
//if a parameter is negative, the position is counted from the end of the string
let sl2 = text.slice(-12)
console.log(sl2)
//another example
let sl3 = text.slice(-12,-6)
console.log(sl3)


//substring
//it is similar to slice ,the difference is the start and end values less than 0 are treated as 0 in substring()
const str = 'Hello, world!';
let substring2 = str.substring(4,2)
console.log(substring2)
const substring1 = str.substring(-2); // Equivalent to str.substring(0)
console.log(substring1); 

//substr
//the substr() mehthod takes two parameters: the starting index and the number of characters to extract

const str1 = 'hello, world!'
const substr1 = str1.substr(7,5)
console.log(substr1)

//
const substrr = str1.substr(-6)
console.log(substrr)

// 
const substrrr = str1.substr(-6,-2)
console.log(substrrr)

//Replace method

const texts = "Please visit Microsoft and Microsoft! " 
const newText = texts.replace('Microsoft!','Ippopay!')
console.log(newText)

//replace case sensitive

const newTexts = texts.replace(/MICROSOFT/i, 'ippopay')
newTexts

//to replace all matches

const repall = texts.replace(/Microsoft/g,'ippopay')
repall

// replaceAll
let texte = "I love cats. Cats are very easy to love. Cats are very popular";
texte = texte.replaceAll(/Cats/g,"Dogs");
texte = texte.replaceAll(/cats/g,"dogs");
console.log(texte);

//toUpperCase and toLowerCase

//upper
let  t1 = "Hello World"
let t2 = t1.toUpperCase()
console.log(t2)

//lower
 let t3 = t2.toLowerCase()
 console.log(t3);

 // string concat

 let t4 = "Hi"
 let t5 = "Dhoni"
 let t6 = t4.concat(" ",t5)
 console.log(t6)

 //trim()
 //it removes the white spaces from both sides

 let word = "     Hello World!     "
 let word1 = word.trim()
 console.log(word.length)
 console.log(word1.length)

 console.log(word1)

 //trimStart()
 //It removes white space only from the start of a string

 let word2 = word.trimStart()
 console.log(word2)

 //trimEnd()
//It removes white space only from the end of a string
 let word3 = word.trimEnd()
 console.log(word3)

 //padStart
 //It pads a string with another string (multiple times) until it reaches a given length from the start.
 const nstr = 'Hello'
 const padstart = nstr.padStart(10,'X')
 console.log(padstart)
 console.log(padstart.length)

 //padEnd()
 ////It pads a string with another string (multiple times) until it reaches a given length  from the end.
 const padEnd = nstr.padEnd(7,'p')
console.log(padEnd)
//
const pads = nstr.padEnd(10)
console.log(pads)


//at()
//it  returns the indexed character from a string
let textr = "W3Schools"
let character = textr.at(0)
character
//charAt()
//The charAt() method returns the character at a specified index (position) in a string
let tex1 = "Hello World"
let char = tex1.charAt(0)
console.log(char)

//charCodeAt()
//returns the unicode of the character at a specified index in a string

let charcode = tex1.charCodeAt(6)
console.log(charcode)


//split()
//A string can be converted to an array with the split() method

const splitt = 'Hello world!';

const parts = splitt.split("@");
console.log(parts);

const fruits = 'apple,banana,cherry'
const parts1 = fruits.split(',')
console.log(parts1)

//Splitting a string with a limit
const strr = 'Hello, world!';

const parts2 = str.split(',', 1);
console.log(parts2)

//includes
const stre = 'leetcode';

console.log(stre.includes('leet')); // Output: true
console.log(stre.includes('world')); // Output: true
console.log(stre.includes('foo'));   // Output: false

//indexof

console.log(stre.indexOf('Hello')); // Output: 0
console.log(stre.indexOf('world')); // Output: 7
console.log(stre.indexOf('foo'));   // Output: -1

//lastIndexOf



console.log(stre.lastIndexOf('l'));      // Output: 10
console.log(stre.lastIndexOf('o'));      // Output: 8
console.log(stre.lastIndexOf('foo'));   // Output: -1

//match



//startsWith()

let t = "Hello world,welcome to the universe"
let v = t.startsWith("H")
let vi = t.startsWith("Helloo")
v
vi

function areYouPlayingBanjo(name) {
    // Implement me
    if(name.startsWith("R") || name.startsWith("r")){
      return name + " plays banjo" 
    }
   
    return name + " does not play banjo";
  }
  console.log(areYouPlayingBanjo("rajkumar"))

  let words = ['hello', 'world', 'this', 'is', 'great']
 
  console.log(words.join(" "))




//endsWith()
let te ="Hello world"
let re = te.endsWith("world")
re





//endsWith()





//find the length of the sting without method










// function length(str){
//     let count = 0
//     while(str[count] != undefined){
//       count++
//     }
//     return count

// }
// let ans = length("hello")
// console.log(ans)


// var strStr = function(haystack, needle) {
//     let result = haystack.indexOf(needle)
//     return result
    
    
// };
// console.log(strStr("sadbutsad","sad"))

var lengthOfLastWord = function(s) {
    let res = s.length-1
    console.log(res)
    let result = res.length
    return result

};
s = "Hello World"
console.log(lengthOfLastWord(s))