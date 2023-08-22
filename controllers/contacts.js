const Contact=require('../models/contact')
const { HttpError, ctrlWrapper } = require("../helpers");

const getAllContacts = async (_, res) => {
  const result = await Contact.find({});

  res.json(result);
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);

  if (!result) {
    throw HttpError(404, 'Not found');
  };

  res.json(result);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json({
    message: "contact deleted",
  });
};

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);

  res.status(201).json(result);
};

const updateContactById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, {new:true});

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

const updateFavorite = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  
    if (!req.body) {
    throw HttpError(400, 'Missing field favorite');
  }

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
  updateFavorite: ctrlWrapper(updateFavorite),
};