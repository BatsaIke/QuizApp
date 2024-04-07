import React, { useCallback, useState } from "react";
import { EditorState, RichUtils, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import styles from "./ComposeMail.module.css";
import Button from "../botton/Button";
import RecipientInput from "./RecipientInput";
import MessageContent from "./MessageContent";
import ContactModal from "./ContactModal";
import { myCustomStyleMap } from "../../utils/customStylesMap";
import Toolbar from "../tool-bar/ToolBar";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../actions/messageAction";
import { set_Alert } from "../../actions/alertAction";



function ComposeMail() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContactNumbers, setSelectedContactNumbers] = useState([]);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [manualRecipient, setManualRecipient] = useState(''); 
  const [from, setFrom] = useState(''); 

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const dispatch=useDispatch()

  
  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };



  const handleRecipientChange = (e) => {
    setManualRecipient(e.target.value); // Update manual recipient state
  };
  // New function to update selected contacts and close modal
 const updateSelectedContacts = useCallback((selectedContacts) => {
    // Convert the selectedContacts to their phone numbers
    const contactNumbers = selectedContacts.map(contact => contact.phoneNumber);
    // Check if there was a manual entry and it's not already included
    if (manualRecipient && !contactNumbers.includes(manualRecipient)) {
        contactNumbers.push(manualRecipient);
    }
    // Update the state with either selected contacts, manual entry, or both
    setSelectedContactNumbers(contactNumbers);
}, [manualRecipient]);
 
const handleSendMessage = async () => {
  const contentState = editorState.getCurrentContent();
  const rawContent = convertToRaw(contentState);
  const textContent = rawContent.blocks.map(block => block.text).join('\n');

  // Combine manualRecipient with selectedContactNumbers if not empty
  const combinedRecipients = manualRecipient.trim() ? [...selectedContactNumbers, manualRecipient.trim()] : [...selectedContactNumbers];

  // Determine the final list of recipients
  // If only one recipient (whether from selectedContactNumbers or manual entry), use it directly; otherwise, use the array.
  const finalRecipients = combinedRecipients.length === 1 ? combinedRecipients[0] : combinedRecipients;

  // Create the message data object
  const messageData = {
    to: finalRecipients,
    from, // Ensure this matches the expected format for your backend
    content: textContent,
  };

  console.log(messageData);
  // Dispatch the sendMessage action
  try {
    const result = await dispatch(sendMessage(messageData));
    if (result.success) {
      console.log("Message sent successfully:", result.data);
      set_Alert("Message sent successfully","success");
    } else {
      console.error("Failed to send message");
      // Handle failure case
    }
  } catch (error) {
    console.error("Error sending message:", error);
    // Handle error case
  }
};


  return (
    <div className={styles.composeMail}>
      <RecipientInput 
        from={from} 
        setFrom={setFrom} 
        selectedContactNumbers={selectedContactNumbers} 
        manualRecipient={manualRecipient} 
        handleRecipientChange={handleRecipientChange} 
        openModal={openModal} 
      />
      <MessageContent 
        editorState={editorState} 
        setEditorState={setEditorState} 
        handleKeyCommand={handleKeyCommand} 
        customStyleMap={myCustomStyleMap} 
      />
            <Toolbar editorState={editorState} setEditorState={setEditorState} />

      <div className={styles.actions}>
        <Button label="Send" onClick={handleSendMessage} />
      </div>
      <ContactModal 
        isModalOpen={isModalOpen} 
        closeModal={closeModal} 
        onSelectContacts={updateSelectedContacts} 
      />
    </div>
  );
}

export default ComposeMail;