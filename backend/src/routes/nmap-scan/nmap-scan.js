const express = require("express");
const { post } = require("../_base.route");
const { nmapUseCase } = require("../../use-cases");
const { ROUTES, METHOD_ROUTES } = require("../../constants");

const nmapScanRouter = express.Router();

const createNmapScanRoutes = (app) => {
  post({
    router: nmapScanRouter,
    path: METHOD_ROUTES.NMAP_SCAN,
    useCase: nmapUseCase,
  });

  app.use(ROUTES.NMAP_SCAN, nmapScanRouter);
};

module.exports = { createNmapScanRoutes };
