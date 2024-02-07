function uniq(str) {
  if (typeof str === "string" && str?.trim()) {
    let string = str?.trim();

    for (let i = 0; i < string?.length; i++) {
      for (let j = i + 1; j < string?.length; j++) {
        if (string[i] === string[j]) {
          return "It is  not unique";
        }
      }
    }
    return "It is unique";
  } else {
    return "Please enter the valid string";
  }
}
console.log(uniq("sfd"));

//another

const string = "asd";
const splitString = string?.split("");
splitString;
console.log(splitString?.length);
const uniqCheck = new Set(splitString);
uniqCheck;
if (uniqCheck?.size == splitString?.length) {
  console.log("it is unique");
} else {
  console.log("it is not unique");
}
