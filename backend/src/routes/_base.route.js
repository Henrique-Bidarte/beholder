const { validateRequest } = require("./validation-rules");

const execUseCase = async (req, useCase) => {
  return await useCase({
    ...req.query,
    ...req.body,
    ...req.params,
  });
};

const get = ({
  router,
  path,
  requestValidationRules = () => [],
  useCase,
  responseMapper = (result) => result,
}) => {
  router.get(
    path,
    requestValidationRules(),
    validateRequest,
    async (req, res, next) => {
      try {
        const result = await execUseCase(req, useCase);
        if (result) {
          return res.status(200).json(responseMapper(result));
        } else {
          return res.sendStatus(404);
        }
      } catch (err) {
        next(err);
      }
    }
  );
};

const post = ({
  router,
  path,
  requestValidationRules = () => [],
  useCase,
  responseMapper = (result) => result,
}) => {
  router.post(
    path,
    requestValidationRules(),
    validateRequest,
    async (req, res, next) => {
      try {
        const result = await execUseCase(req, useCase);
        if (result) {
          return res.status(201).json(responseMapper(result));
        } else {
          return res.sendStatus(422);
        }
      } catch (err) {
        next(err);
      }
    }
  );
};

module.exports = {
  get,
  post,
};
