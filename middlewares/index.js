const {validateBody, validateBodyupdateFavorite} = require("./validateBody");
const isValidId = require('./isValidId');
const authenticate = require('./authenticate');

module.exports = {
    validateBody,
    validateBodyupdateFavorite,
    isValidId,
    authenticate,
};