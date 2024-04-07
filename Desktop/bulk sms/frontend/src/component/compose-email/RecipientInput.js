import React from 'react';
import TextInput from "../text-input/TextInput";
import Button from '../botton/Button';

const RecipientInput = ({ from, setFrom, selectedContactNumbers, manualRecipient, handleRecipientChange, openModal }) => {
  return (
    <>
      <div className="recipientInputContainer">
        <TextInput 
          type="text" 
          placeholder="From" 
          value={from}
          onChange={(e) => setFrom(e.target.value)} 
        />
      </div>
      <div className="recipientInputContainer">
        <TextInput
          type="text"
          placeholder="Recipient"
          value={selectedContactNumbers.join(", ") || manualRecipient}
          onChange={handleRecipientChange}
        />
        <Button label="Add Recipients" onClick={openModal} />
      </div>
    </>
  );
};

export default RecipientInput;
