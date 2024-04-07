const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', 
  },
  fullName: {
    type: String,
  },
  email: {
    type: String
  },
  phoneNumber: {
    type: String,
    required: true
  },
  facebookId: {
    type: String
  },
  instagramId: {
    type: String
  },
  dob: {
    type: String,
    required: false,  
    validate: {
      validator: function(v) {
        // Allows empty string or null values, or checks the format if v is not empty
        return !v || /\d{2}-\d{2}/.test(v); // Now it allows empty fields as well
      },
      message: 'dob must be in "MM-DD" format or be empty'
    }
  },
  importOption: {
    type: Boolean,
    default: false
  },
  groupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group',
    default: null
  },
  
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Middleware to set updatedAt on update operations
ContactSchema.pre('findOneAndUpdate', function() {
  this.set({ updatedAt: new Date() });
});

module.exports = mongoose.model('Contact', ContactSchema);
