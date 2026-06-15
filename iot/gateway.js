const {
  createSensorReadings,
  getSensorSnapshot,
  validateSensorSnapshot,
} = require('./sensorSimulator');

function publishDemoTelemetry() {
  const snapshot = getSensorSnapshot(createSensorReadings());

  validateSensorSnapshot(snapshot);

  console.log('[T-23][Ege IoT] simulated telemetry ready');
  console.log(JSON.stringify(snapshot, null, 2));

  return snapshot;
}

if (require.main === module) {
  publishDemoTelemetry();
}

module.exports = {
  publishDemoTelemetry,
};