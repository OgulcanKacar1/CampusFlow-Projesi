function createSensorReadings() {
  return [
    { id: 'S-01', zone: 'A', occupied: true },
    { id: 'S-02', zone: 'A', occupied: true },
    { id: 'S-03', zone: 'B', occupied: false },
  ];
}

function getSensorSnapshot(sensorReadings = createSensorReadings()) {
  const occupiedCount = sensorReadings.filter((sensor) => sensor.occupied).length;

  return {
    campus: 'CampusFlow Park',
    capturedAt: new Date().toISOString(),
    occupiedCount,
    freeCount: sensorReadings.length - occupiedCount,
    sensors: sensorReadings,
  };
}

function validateSensorSnapshot(snapshot) {
  if (!snapshot || !Array.isArray(snapshot.sensors)) {
    throw new TypeError('snapshot.sensors must be an array');
  }

  if (snapshot.occupiedCount + snapshot.freeCount !== snapshot.sensors.length) {
    throw new RangeError('snapshot counts do not match sensor list length');
  }

  return true;
}

module.exports = {
  createSensorReadings,
  getSensorSnapshot,
  validateSensorSnapshot,
};