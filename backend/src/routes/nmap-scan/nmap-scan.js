const express = require("express");
const { post } = require("../_base.route");
const {
  nmapUseCase,
  nmapPingUseCase,
  nmapAgressiveUseCase,
} = require("../../use-cases");
const { ROUTES, METHOD_ROUTES } = require("../../constants");

const nmapScanRouter = express.Router();

const createNmapScanRoutes = (app) => {
  post({
    router: nmapScanRouter,
    path: METHOD_ROUTES.NMAP_SCAN,
    useCase: nmapUseCase,
  });

  post({
    router: nmapScanRouter,
    path: METHOD_ROUTES.NMAP_PING,
    useCase: nmapPingUseCase,
  });

  post({
    router: nmapScanRouter,
    path: METHOD_ROUTES.NMAP_AGRESSIVE,
    useCase: nmapAgressiveUseCase,
  });

  app.use(ROUTES.NMAP_SCAN, nmapScanRouter);
};

module.exports = { createNmapScanRoutes };
