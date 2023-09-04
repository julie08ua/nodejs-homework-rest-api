const {validateBody, validateBodyupdateFavorite} = require("./validateBody");
const isValidId = require('./isValidId');
const authenticate = require('./authenticate');
const upload = require('./upload');

module.exports = {
    validateBody,
    validateBodyupdateFavorite,
    isValidId,
    authenticate,
    upload,
};