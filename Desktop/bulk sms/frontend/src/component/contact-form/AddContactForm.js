import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./AddContactForm.module.css";
import { useDispatch } from "react-redux";
import {
  handleCSVSubmission,
  handleFormSubmission,
} from "../../utils/contactFormUtils";
import Spinner from "../../UI/Spinner";
// Ensure correct import path 

function AddContactForm({onAddSuccess, groupId}) {

  const [isLoading, setIsLoading] = useState(false); // Loading state

  console.log(groupId,"groupid")

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
    clearErrors,
    reset,
  } = useForm({
    
  });
  const dispatch = useDispatch();
  const watchImportOption = watch("importOption");


  const handleFormSubmit = async (data) => {
    setIsLoading(true); // Start loading
    try {
      if (data.importOption && data.csvFile?.[0]) {
        await handleCSVSubmission(
          data.csvFile[0],
          dispatch,
          reset,
          setError,
          clearErrors,
          groupId
        );
      } else {
        await handleFormSubmission(
          {
            ...data,
            groupId,
          },
          dispatch,
          reset,
          setError,
          clearErrors
        );
      }
      onAddSuccess();
    } finally {
      setIsLoading(false); // Stop loading regardless of the outcome
    }
  };

  if (isLoading) {
    return <Spinner />; 
  }




  return (
    <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
      <h3>Add New Contact</h3>
      <div className={styles.inputGroup}>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          {...register("fullName")}
          disabled={watchImportOption}
        />
        {errors.fullName && (
          <span className={styles.error}>{errors.fullName.message}</span>
        )}
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          {...register("email")}
          disabled={watchImportOption}
        />
        {errors.email && (
          <span className={styles.error}>{errors.email.message}</span>
        )}
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          {...register("phoneNumber")}
          disabled={watchImportOption}
        />
        {errors.phoneNumber && (
          <span className={styles.error}>{errors.phoneNumber.message}</span>
        )}
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="facebookId">Facebook ID:</label>
        <input type="text" id="facebookId" {...register("facebookId")} />
        {/* Errors for Facebook ID aren't necessary unless you validate this field */}
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="instagramId">Instagram ID:</label>
        <input type="text" id="instagramId" {...register("instagramId")} />
        {/* Similar for Instagram ID */}
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="dob">Date of Birth:</label>
        <input type="date" id="dob" {...register("dob")} />
        {/* And DOB */}
      </div>
      <div className={`${styles.inputGroup} ${styles.checkboxGroup}`}>
        <input
          type="checkbox"
          id="importOption"
          name="importOption"
          {...register("importOption")}
        />
        <label htmlFor="importOption">Import from CSV</label>
      </div>
      {watchImportOption && (
        <div className={styles.inputGroup}>
          <label htmlFor="csvFile">Select CSV file:</label>
          <input
            type="file"
            id="csvFile"
            name="csvFile"
            {...register("csvFile")}
            accept=".csv"
          />
          {errors.csvFile && (
            <span className={styles.error}>{errors.csvFile.message}</span>
          )}
        </div>
      )}
      <button type="submit" className={styles.submitButton}>
        Add Contact
      </button>
    </form>
  );
}

export default AddContactForm;
