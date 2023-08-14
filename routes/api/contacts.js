const express = require('express');
const router = express.Router();
const { validateBody } = require("../../middlewares");
const schemas = require("../../schemas/contacts");
const {
  getAllContacts,
  getContactById,
  addContact,
  updateContactById,
  deleteContact,
} = require('../../controllers/contacts.js');

router.get('/', getAllContacts);

router.get('/:id', getContactById);

router.post('/', validateBody(schemas.schema), addContact);

router.delete('/:id', deleteContact);

router.put('/:id', validateBody(schemas.schema), updateContactById);

module.exports = router;