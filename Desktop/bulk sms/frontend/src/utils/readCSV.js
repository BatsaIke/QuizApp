import { parseCSV } from "./parseCSV";

export const readCSVFile = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        const data = parseCSV(text); // Parse CSV text
        resolve(data); // Resolve the parsed data
      };
      reader.onerror = (e) => reject(e.target.error);
      reader.readAsText(file); // Read the file as plain text
    });
  };