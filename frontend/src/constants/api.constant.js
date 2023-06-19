const API_METHOD = {
  GET: "GET",
  POST: "POST",
};

const API_ROUTES = {
  HEALTHCHECK: "/healthcheck",
  NMAP_BASE_SCAN: "/scan",
  NMAP_PING: "/scan/ping",
  NMAP_AGRESSIVE: "/scan/agressive",
};

const API_URL = "http://localhost:3001";

export { API_METHOD, API_URL, API_ROUTES };
