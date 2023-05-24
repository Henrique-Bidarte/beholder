const { ROUTES } = require("../../constants");

const healthCheck = (req, res) => {
  res.send({
    status: "OK",
  });
};

const createHealthRoutes = (app) => {
  app.get(ROUTES.HEALTH_CHECK, healthCheck);
};

module.exports = {
  createHealthRoutes,
};
