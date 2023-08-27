const express = require('express');
const router = express.Router();
const { validateBody, validateBodyupdateFavorite, isValidId, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/contact");
const {
  getAllContacts,
  getContactById,
  addContact,
  updateContactById,
  deleteContact,
  updateFavorite
} = require('../../controllers/contacts.js');

router.get('/', authenticate, getAllContacts);

router.get('/:id', authenticate, isValidId, getContactById);

router.post('/', authenticate, validateBody(schemas.schema), addContact);

router.delete('/:id', authenticate, isValidId, deleteContact);

router.put('/:id', authenticate, isValidId, validateBody(schemas.schema), updateContactById);

router.patch('/:id/favorite', authenticate, isValidId, validateBodyupdateFavorite(schemas.updateFavoriteSchema), updateFavorite);

module.exports = router;