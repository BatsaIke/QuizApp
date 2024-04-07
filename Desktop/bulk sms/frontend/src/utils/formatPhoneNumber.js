function formatPhoneNumber(phoneNumber) {
  // Remove dashes, spaces, and trim
  let formattedNumber = phoneNumber.replace(/-|\s/g, '').trim();

  // Prepend country code '233' if the number starts with '0' and is exactly 10 digits long
  if (formattedNumber.startsWith('0') && formattedNumber.length === 10) {
    formattedNumber = '233' + formattedNumber.substring(1);
  }

  return formattedNumber;
}

module.exports = formatPhoneNumber;
