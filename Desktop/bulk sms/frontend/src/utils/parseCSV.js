import formatMonthDay from './formatMonthDate';
import formatPhoneNumber from './formatPhoneNumber';


export const parseCSV = (text) => {
  const lines = text.split('\n').filter(line => line); // Filter out empty lines
  const result = [];
  const headers = lines[0].split(',').map(header => header.trim());

  // Maps from CSV headers to field names expected in the schema
  const headerMap = {
    'phone number': 'phoneNumber',
    'full name': 'fullName',
    // Add other headers as needed
  };

  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const currentline = lines[i].split(',');

    for (let j = 0; j < headers.length; j++) {
      // Use the headerMap to convert CSV headers to schema field names
      const fieldName = headerMap[headers[j].toLowerCase()] || headers[j];

      if (fieldName === 'phoneNumber') {
        obj[fieldName] = formatPhoneNumber(currentline[j].trim());
      } else if (fieldName === 'dob') {
        obj[fieldName] = formatMonthDay(currentline[j].trim());
      } else {
        obj[fieldName] = currentline[j].trim();
      }
    }
    result.push(obj);
  }
  return result; // Returns array of objects with formatted phone numbers and DOBs
};
