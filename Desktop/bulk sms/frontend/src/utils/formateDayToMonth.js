function formatDateToMonthDay(dateInput) {
    // Check if the input is undefined, null, or empty
    if (!dateInput) {
      return 'Invalid date';
    }
  
    // Ensure dateInput is a Date object
    const date = new Date(dateInput);
  
    // Check if date conversion results in an invalid date
    if (isNaN(date.getTime())) {
      return 'Invalid date';
    }
  
    const month = date.getMonth() + 1; // getMonth() returns 0-11
    const day = date.getDate();
    return `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  }
  

  module.exports = formatDateToMonthDay;