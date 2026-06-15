const { getSensorSnapshot } = require('./sensorSimulator');

function publishDemoTelemetry() {
  const payload = getSensorSnapshot();

  console.log('[T-22][IoT Demo] simulated telemetry generated');
  console.log('[T-22][IoT Demo] payload follows');
  console.log(JSON.stringify(payload, null, 2));

  return payload;
}

if (require.main === module) {
  publishDemoTelemetry();
}

module.exports = {
  publishDemoTelemetry,
};
