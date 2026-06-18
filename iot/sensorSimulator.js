


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
