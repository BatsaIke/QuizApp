import * as yup from "yup";

export const schema = yup.object().shape({
  fullName: yup.string(),
  email: yup.string().email("Invalid email"),
  phoneNumber: yup.string(),

  importOption: yup.bool(),
  csvFile: yup
    .mixed()
    .when("importOption", (importOption, schema) =>
      importOption
        ? schema.test(
            "fileType",
            "Invalid file type",
            (value) =>
              !value ||
              value.length === 0 ||
              (value[0] && value[0].type === "text/csv")
          )
        : schema.notRequired()
    ),
});

export const getSchema = (isCsvImport) => {
  if (isCsvImport) {
    // Return a schema with minimal validation if CSV import is selected
    return yup.object().shape({
      csvFile: yup.mixed().required("A CSV file is required for import."),
    });
  }

  // Return the default schema with full validation for individual contacts
  return yup.object().shape({
    fullName: yup.string().required("Full name is required."),
    email: yup.string(),
    phoneNumber: yup.string().required("Phone number is required."),
    facebookId: yup.string(),
    instagramId: yup.string(),
    dob: yup.date(),
    // ... add other fields as necessary
  });
};

export const signupSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters long"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
  //   'Password must contain at least one uppercase letter, one lowercase letter, and one number'
  // ),
});

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});
