const { nmapUseCase } = require("./nmap-scan/nmap.use-case");
const { nmapPingUseCase } = require("./nmap-scan/nmap-ping.use-case");
const { nmapAgressiveUseCase } = require("./nmap-scan/nmap-agressive.use-case");

module.exports = {
  nmapUseCase,
  nmapPingUseCase,
  nmapAgressiveUseCase,
};
