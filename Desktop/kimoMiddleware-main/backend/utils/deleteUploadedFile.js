const path = require("path");
const fs = require("fs");
// Function to delete uploaded file
const deleteUploadedFile = (file) => {
    if (file) {
      const filename = file.filename;
      const filePath = path.join("uploads", filename);
  
      fs.unlink(filePath, (err) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ msg: "Error deleting file" });
        }
      });
    }
  };

  module.exports = deleteUploadedFile;