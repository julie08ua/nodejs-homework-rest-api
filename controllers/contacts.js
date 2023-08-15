const contacts = require("../models/contacts");
const { HttpError, ctrlWrapper } = require("../helpers");

const getAllContacts = async (_, res) => {
  const result = await contacts.listContacts();

  res.json(result);
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.getContactById(id);

  if (!result) {
    throw HttpError(404, 'Not found');
  };

  res.json(result);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.removeContact(id);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json({
    message: "contact deleted",
  });
};

const addContact = async (req, res) => {
  const result = await contacts.addContact(req.body);

  res.status(201).json(result);
};

const updateContactById = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.updateContact(id, req.body);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContactById: ctrlWrapper(getContactById),
  deleteContact: ctrlWrapper(deleteContact),
  addContact: ctrlWrapper(addContact),
  updateContactById: ctrlWrapper(updateContactById),
};