import React from 'react';
import { Editor } from "draft-js";
import Toolbar from "../tool-bar/ToolBar";
import styles from './ComposeMail.module.css'


const MessageContent = ({ editorState, setEditorState, handleKeyCommand, customStyleMap }) => {
  return (
    <div className={styles.composeTextArea}>
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
        customStyleMap={customStyleMap}
      />
    </div>
  );
};

export default MessageContent;



// return (
//     <div className={styles.composeMail}>
//       <div className={styles.recipientInputContainer}>
//       <TextInput 
//           type="text" 
//           placeholder="From" 
//           value={from}
//           onChange={(e) => setFrom(e.target.value)} 
//         />
//       </div>
//       <div className={styles.recipientInputContainer}>
//         <TextInput
//           type="text"
//           placeholder="Recipient"
//           value={selectedContactNumbers.join(", ") || manualRecipient}
//           onChange={handleRecipientChange} // Allow manual entry
//         />
//         <Button label="Add Recipients" onClick={openModal} />
//       </div>
//       <TextInput placeholder="Subject" />
//       <div className={styles.composeTextArea}>
//         <Editor
//           editorState={editorState}
//           onChange={setEditorState}
//           handleKeyCommand={handleKeyCommand}
//           customStyleMap={myCustomStyleMap}
//         />
//       </div>
//       <div className={styles.actions}>
//         <Button label="Send" onClick={handleSendMessage} />
//       </div>
//       <Modal
//         isOpen={isModalOpen}
//         onClose={closeModal}
//         className={styles.composeModalCustomStyle}
//         footer={
//           <Button
//             label="Confirm Selection"
//             onClick={closeModal}
//             className={styles.confirmSelection}
//           />
//         }
//       >
//         <Contacts
//           onSelectContacts={updateSelectedContacts}
//           className={styles.composeModalContacts}
//         />
//       </Modal>
//     </div>
//   );
// }

// export default ComposeMail;

