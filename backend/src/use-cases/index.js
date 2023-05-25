const { nmapUseCase } = require("./nmap-scan/nmap.use-case");
const { nmapPingUseCase } = require("./nmap-scan/nmap-ping.use-case");

module.exports = {
  nmapUseCase,
  nmapPingUseCase,
};
