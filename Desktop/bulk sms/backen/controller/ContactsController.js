// controllers/contactsController.js
const { validationResult } = require('express-validator');
const Contact = require('../model/ContactsModel');
const Group = require('../model/GroupsModel');
const mongoose = require('mongoose');

exports.createContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Check if req.body is an array (multiple contacts) or a single object (single contact)
    const contacts = Array.isArray(req.body) ? req.body : [req.body];

    const createdContacts = []; // To keep track of successfully created or updated contacts
    const errors = []; // To keep track of errors for individual contacts

    for (const contact of contacts) {
      const { phoneNumber, groupId, ...otherData } = contact;
      console.log(phoneNumber, groupId, otherData);

      const userId = req.user.id;

      // Validate groupId if provided
      if (groupId) {
        const groupExists = await Group.findById(groupId);
        if (!groupExists) {
          errors.push({ phoneNumber, message: "Group not found" });
          continue; // Skip to the next contact
        }
      }

      // Construct the contact data, including userId
      const contactData = {
        ...otherData,
        phoneNumber,
        userId,
        ...(groupId && { groupId }),
      };

      // Check for existing contact
      const existingContact = await Contact.findOne({
        phoneNumber,
        userId,
        ...(groupId && { groupId }),
      });

      if (existingContact) {
        // Update existing contact
        const updatedContact = await Contact.findByIdAndUpdate(existingContact._id, contactData, { new: true });
        createdContacts.push(updatedContact);
      } else {
        // Create a new contact
        const newContact = new Contact({
          ...contact,
          userId, // Ensure the authenticated user's ID is included
        });
        await newContact.save();
        createdContacts.push(newContact);
      }
    }

    // If there were any errors, you could choose to also return them here
    // For simplicity, only returning the created/updated contacts
    return res.status(201).json({ createdContacts, errors });

  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};






// Get all contacts, most recent first

exports.getAllContacts = async (req, res) => {
  try {
    const userId = req.user.id; 
 

    // If groupId is provided in the query
    if (req.query.groupId) {
      // Check if the provided groupId is a valid ObjectId
      if (!mongoose.Types.ObjectId.isValid(req.query.groupId)) {
        return res.status(400).send('Invalid group ID format');
      }

      // Fetch contacts that belong to the provided groupId and are associated with the authenticated user
      const contacts = await Contact.find({
        groupId: req.query.groupId,
        userId: userId // Ensure the contacts belong to the authenticated user
      }).sort({ createdAt: -1 });

      // Check if the group exists
      const groupExists = await Group.findById(req.query.groupId);
      if (!groupExists) {
        return res.status(404).send('Group not found');
      }

      // Return the contacts of the group if any, or an empty array if the group is empty
      return res.status(200).json(contacts);
    } 

    // If no groupId is provided, return all contacts associated with the authenticated user
    const contacts = await Contact.find({ userId: userId }).sort({ createdAt: -1 }); // Filter by userId
    res.status(200).json({contacts: contacts,count: contacts.length});
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

