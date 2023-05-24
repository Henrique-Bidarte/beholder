const { validationResult } = require("express-validator");

const validateRequest = (req, res, next) => {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    const errosFormatados = erros.array().map((erro) => {
      return { message: erro.msg, param: erro.param };
    });
    return res.status(400).json(errosFormatados);
  } else {
    next();
  }
};

module.exports = {
  validateRequest,
};
