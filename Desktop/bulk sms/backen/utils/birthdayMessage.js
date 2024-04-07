// Import necessary modules and dependencies
const cron = require('node-cron');
const Contact = require('../model/ContactsModel');
const User = require('../model/UserModel');
const sendSMS = require('./hubtel/sendSMS');
const handleSMSResponse = require('./hubtel/handleResponse');

// Helper function to shorten sender's name
const shortenSenderName = (name) => {
  if (name.length <= 10) return name; // Return the name if it's short enough

  // Split the name into words and create an acronym
  const words = name.split(' ');
  const acronym = words.map(word => word[0]).join('');

  return acronym;
};

const scheduleBirthdayReminder = () => {
    // Schedule a task to run every day at 3:25 am
    cron.schedule('45 20 * * *', async () => {
      try { 
        // Get today's date
        const today = new Date();
        const todayDayMonth = today.toISOString().slice(5, 10); // Extract day and month (MM-DD) from today's date

        // Find contacts whose DOB matches today's day and month
        const contacts = await Contact.find({
          $expr: {
            $eq: [
              { $substrCP: ['$dob', 5, 5] }, // Extract day and month (MM-DD) from the DOB field
              todayDayMonth
            ]
          }
        });

        // Construct and send birthday messages
        for (const contact of contacts) {
          // Fetch user associated with the contact
          const user = await User.findById(contact.userId);

          // Check if user exists before accessing its properties
          if (user) {
            // Shorten the sender's name if necessary
            const senderName = shortenSenderName(user.name);

            // Construct the birthday message including user's name
            const birthdayMessage = `Dear ${contact.fullName}, as a new chapter begins in your life, ${user.name} would like to wish you all the joy and success you could ever want in life. Happy birthday to you.`;
console.log(contact.phoneNumber,"PHONEEEEEE", senderName, birthdayMessage)
            // Send birthday message via email or SMS
            const response = await sendSMS({ recipients: contact.phoneNumber, from: senderName, content: birthdayMessage });
            let to= contact.phoneNumber, content= birthdayMessage, from= senderName;
            await handleSMSResponse(response, to, content, from);

            // Log a message for successful send
            console.log(`Birthday message sent successfully to ${contact.fullName}`);
          } else {
            // Log an error if user is not found
            console.error(`User with ID ${contact.userId} not found for contact ${contact.fullName}`);
          }
        }
      } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error sending birthday messages:', error);
      }
    });
};

// Export the cron job function
module.exports = scheduleBirthdayReminder;
