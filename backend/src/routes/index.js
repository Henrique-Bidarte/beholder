const { createHealthRoutes } = require("./health-check/health-check.route");

const createRoutes = (app) => {
  createHealthRoutes(app);
};

module.exports = {
  createRoutes,
};
