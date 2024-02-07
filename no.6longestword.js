function longeststring(string) {
  if (typeof string === "string") {
    let str = string?.split(" ");
    let empty = "";

    for (let i = 0; i < str?.length; i++) {
      if (str[i]?.length > empty?.length) {
        empty = str[i];
      }
    }
    return empty ?? "no long string found";
  }
}

let words = "Iam the longest word ";
console.log(longeststring(words));

//

function longeststring(string) {
    if (typeof string === 'string'&& string.trim()) {
        let str = string?.split(" ");
        let maxLength = 0;
        let longestString = "";

        for (let i = 0; i < str?.length; i++) {
            if (str[i]?.length > maxLength) {
                maxLength = str[i]?.length;
                longestString = str[i];
            } else if (str[i]?.length === maxLength) {
                longestString += " " + str[i];
            }
        }

        return longestString;
    }
    else{
        return "Invalid String"
    }
  }

  let word = "";
  console.log(longeststring(word));
