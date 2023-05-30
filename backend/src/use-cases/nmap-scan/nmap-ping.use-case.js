const nmap = require("node-nmap");

const nmapPingUseCase = async ({ domain, loudness }) => {
  nmap.nmapLocation = "nmap";
  const nmapScan = new nmap.NmapScan(`-sn ${loudness} ${domain}`);

  nmapScan.startScan();

  const p = new Promise((resolve) => {
    nmapScan.on("complete", (data) => {
      resolve(data);
    });

    nmapScan.on("error", (data) => {
      resolve(data);
    });
  });

  return p;
};
module.exports = {
  nmapPingUseCase,
};
