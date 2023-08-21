const express = require('express');
const router = express.Router();
const { validateBody, validateBodyupdateFavorite, isValidId } = require("../../middlewares");
const schemas = require("../../schemas/contacts");
const {
  getAllContacts,
  getContactById,
  addContact,
  updateContactById,
  deleteContact,
  updateFavorite
} = require('../../controllers/contacts.js');

router.get('/', getAllContacts);

router.get('/:id', isValidId, getContactById);

router.post('/', validateBody(schemas.schema), addContact);

router.delete('/:id', isValidId, deleteContact);

router.put('/:id', isValidId, validateBody(schemas.schema), updateContactById);

router.patch('/:id/favorite', isValidId, validateBodyupdateFavorite(schemas.updateFavoriteSchema), updateFavorite);

module.exports = router;