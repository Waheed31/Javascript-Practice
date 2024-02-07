function anagram(string1, string2) {
   try {
    if (typeof string1 != "string" || typeof string2 != "string") {
      throw new Error("It accepts only string as input")
    }
    if (string1.trim()?.length < 1 || string2?.trim()?.length < 1) {
      throw new Error("The string value should not be empty")
    }
    if (/\d/?.test(string1) || /\d/?.test(string2)) {
      throw new Error("The String value must only contain alphabets")
    }

    let word1 = string1?.trim().split("")?.sort()
    let word2 = string2?.trim().split("")?.sort()
    console.log(word1)
    console.log(word2)
    if (word1?.length !== word2?.length) {
      throw new Error("Enter the equal lengthy word to check if its an anagram")
    }
    for (let i = 0; i < word1?.length; i++) {
     if (word1[i] !== word2[i]){
        return "It is not an anagram"
      }
    }
    return "It is an anagram"
  } catch (error) {
    return error
  }
}
console.log(anagram("ahedew", "heedaw"))





