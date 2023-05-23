const healthCheck = (req, res) => {
  res.send({
    status: "OK",
  });
};

const createHealthRoutes = (app) => {
  app.get("/healthcheck", healthCheck);
};

module.exports = {
  createHealthRoutes,
};
