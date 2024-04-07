function formatDate(date) {
  // Check if the date is falsy or if the Date constructor cannot parse it
  if (!date || isNaN(new Date(date).getTime())) {
    return ''; // Return an empty string if the date is not valid
  }

  const d = new Date(date);
  let month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear(),
      hours = '' + d.getHours(),
      minutes = '' + d.getMinutes(),
      seconds = '' + d.getSeconds();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  if (hours.length < 2) hours = '0' + hours;
  if (minutes.length < 2) minutes = '0' + minutes;
  if (seconds.length < 2) seconds = '0' + seconds;

  const datePart = [year, month, day].join('-');
  const timePart = [hours, minutes, seconds].join(':');

  return `${datePart} ${timePart}`;
}

export default formatDate;  