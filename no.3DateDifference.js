function dateDifferenceInDays(dateString1, dateString2) {
  try {
    if (!dateString1 || !dateString2) {
      throw new Error(
        "Please enter the date strings inside both the paramaters"
      );
    }
    const dateregex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateregex?.test(dateString1) || !dateregex?.test(dateString2)) {
      throw new Error(
        "Please type both the date strings inside in this format YYYY-MM-DD"
      )
    }
    const date1 = new Date(dateString1)
    const date2 = new Date(dateString2)
    const milliseconds = date2 - date1
    console.log(milliseconds);
    const differenceindays = milliseconds / (1000 * 60 * 60 * 24)

    return `there are ${Math?.abs(differenceindays)} days difference`
  } catch (error) {
    return error
  }
}
const result = dateDifferenceInDays("2023-08-05", "2023-08-08");
console.log(result)



