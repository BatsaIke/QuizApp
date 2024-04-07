// utils/formUtils.js
import { readCSVFile } from "./readCSV"; // Adjust the path as necessary
import { createContact } from "../actions/contactsAction";
import { set_Alert } from "../actions/alertAction";

// This function can be async if you're performing async operations
export const handleFormSubmission = async (data, dispatch, reset, setError, clearErrors) => {
  try {
    let res = await dispatch(createContact(data));
    if (res.success) {
      dispatch(set_Alert("Contact(s) added", "success", 4000));
      reset();
    }
  } catch (error) {
    console.error(error);
  }
};

export const handleCSVSubmission = async (csvFile, dispatch, reset, setError, clearErrors) => {
  if (!csvFile || csvFile.size === 0) {
    setError("csvFile", {
      type: "manual",
      message: "CSV file is required when import option is selected.",
    });
    return;
  }
  clearErrors("csvFile");
  try {
    const parsedData = await readCSVFile(csvFile);
    console.log("Parsed CSV data:", parsedData);
    await handleFormSubmission(parsedData, dispatch, reset, setError, clearErrors);
  } catch (error) {
    console.error("Error reading or parsing CSV file:", error);
  }
};
