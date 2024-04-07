function formatMonthDay(dateStr) {
  if (!dateStr) {
    return '';
  }
    dateStr = String(dateStr);
  
    const months = {
      Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
      Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'
    };
  
    // Split the date string by '/' or '-' to separate day and month
    const parts = dateStr.split(/\/|-/);
    const day = parts[0].padStart(2, '0'); // Ensure day is 2 digits
    const month = months[parts[1]];
  
    if (!month || !day) {
      return '';
    }
    // Return the formatted date string as "MM-DD"
    return `${month}-${day}`;
  }
  

  module.exports = formatMonthDay