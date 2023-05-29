const ROUTES = {
  HEALTH_CHECK: "/healthcheck",
  NMAP_SCAN: "/scan",
};

const METHOD_ROUTES = {
  NMAP_SCAN: "/",
  NMAP_PING: "/ping",
  NMAP_AGRESSIVE: "/agressive",
};

module.exports = {
  ROUTES,
  METHOD_ROUTES,
};
