const express = require("express");
const { createRoutes } = require("./routes");
const { configureServer } = require("./config");
const { API_PORT } = require("./constants");

const app = express();

const startApp = async () => {
  try {
    app.use(express.json());
    configureServer(app);
    createRoutes(app);
    app.listen(API_PORT, () => {
      console.log(`Server running on port ${API_PORT}`);
    });
  } catch (error) {
    console.error(`Initialization failet with error: ${error}`);
  }
};

startApp();
