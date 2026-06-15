const { getSensorSnapshot } = require('./sensorSimulator');

function publishDemoTelemetry() {
  const payload = getSensorSnapshot();

  console.log('[IoT Gateway] Demo telemetry payload');
  console.log(JSON.stringify(payload, null, 2));

  return payload;
}

if (require.main === module) {
  publishDemoTelemetry();
}

module.exports = {
  publishDemoTelemetry,
};
