const { HttpError } = require("../helpers");

const validateBody = (schema) => {
    const func = (req, _, next) => {
        if (!Object.keys(req.body).length) {
            throw HttpError(400, "missing fields");
        }
        
        const { error } = schema.validate(req.body);
        if (error) {
            next(HttpError(400, error.message));
        }

        next();
    };
    
    return func;
};

const validateBodyupdateFavorite = (schema) => {
  const func = (req, _, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };

  return func;
};

module.exports = {
    validateBody,
    validateBodyupdateFavorite,
};