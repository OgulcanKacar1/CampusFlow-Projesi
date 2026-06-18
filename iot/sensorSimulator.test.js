const test = require('node:test');
const assert = require('node:assert/strict');

const {
  createSensorReadings,
  getSensorSnapshot,
  validateSensorSnapshot,
} = require('./sensorSimulator');

test('creates a stable set of sensor readings', () => {
  const readings = createSensorReadings();

  assert.equal(readings.length, 3);
  assert.equal(readings.filter((sensor) => sensor.occupied).length, 2);
});

test('builds a telemetry snapshot from readings', () => {
  const readings = createSensorReadings();
  const snapshot = getSensorSnapshot(readings);

  assert.equal(snapshot.campus, 'CampusFlow Park');
  assert.equal(snapshot.occupiedCount, 2);
  assert.equal(snapshot.freeCount, 1);
  assert.equal(snapshot.sensors.length, 3);
});

test('validates telemetry snapshots and rejects mismatches', () => {
  const snapshot = getSensorSnapshot(createSensorReadings());

  assert.equal(validateSensorSnapshot(snapshot), true);
  assert.throws(() => validateSensorSnapshot({}), TypeError);
  assert.throws(
    () => validateSensorSnapshot({ sensors: [], occupiedCount: 1, freeCount: 1 }),
    RangeError,
  );
});