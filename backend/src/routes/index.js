const { createHealthRoutes } = require("./health-check/health-check.route");
const { createNmapScanRoutes } = require("./nmap-scan/nmap-scan");

const createRoutes = (app) => {
  createHealthRoutes(app);
  createNmapScanRoutes(app);
};

module.exports = {
  createRoutes,
};
