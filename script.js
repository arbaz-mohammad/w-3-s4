function getDayOfWeek(dateString) {
    const dateParts = dateString.split('-');
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]);
    const day = parseInt(dateParts[2]);
  
    const centuryDigits = Math.floor(year / 100);
    const yearDigits = year % 100;
  
    // Zeller's Congruence formula
    const h = (day + Math.floor((13 * (month + 1)) / 5) + yearDigits +
      Math.floor(yearDigits / 4) + Math.floor(centuryDigits / 4) -
      2 * centuryDigits) % 7;
  
    const dayOfWeek = (h + 5) % 7; // Adjust for JavaScript's day indexing (0-6)
  
    switch (dayOfWeek) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        return "Invalid date";
    }
  }
  
  // Example usage:
  const inputDate = "2023-05-15";
  const dayOfWeek = getDayOfWeek(inputDate);
  console.log(dayOfWeek); // Outputs: Monday
  