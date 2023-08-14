const fs = require('fs/promises');
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath);

  return JSON.parse(contacts);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const findContact = contacts.find(contact => contact.id === contactId);

  if (!findContact) {
    return null;
  }
  
  return findContact;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const findIndex = contacts.findIndex(contact => contact.id === contactId);
        
  if (findIndex === -1) {
    return null;
  }

  const deletedContact = contacts.splice(findIndex, 1)[0];
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return deletedContact;
};

const addContact = async ({ name, email, phone }) => {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

  return newContact;
};

const updateContact = async (contactId, { name, email, phone }) => {
  const contacts = await listContacts();
  const findIndex = contacts.findIndex(contact => contact.id === contactId);
        
  if (findIndex === -1) {
    return null;
  }

  contacts[findIndex] = { id: contactId, name, email, phone };
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

  return contacts[findIndex];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};