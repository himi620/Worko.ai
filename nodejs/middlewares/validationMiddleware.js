const { check, validationResult } = require('express-validator');

const userValidationRules = () => [
  check('email').isEmail().withMessage('Email is invalid'),
  check('zipCode').isPostalCode().withMessage('Zip code is invalid')
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

module.exports = {
  userValidationRules,
  validate,
};
