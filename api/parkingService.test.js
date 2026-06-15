const test = require('node:test');
const assert = require('node:assert/strict');

const {
  createParkingState,
  getOccupancySnapshot,
  updateParkingOccupancy,
} = require('./parkingService');

test('builds an occupancy snapshot', () => {
  const state = {
    totalSpots: 40,
    occupiedSpots: 12,
    lastUpdated: '2026-06-16T10:00:00.000Z',
  };

  assert.deepEqual(getOccupancySnapshot(state), {
    totalSpots: 40,
    occupiedSpots: 12,
    availableSpots: 28,
    lastUpdated: '2026-06-16T10:00:00.000Z',
  });
});

test('updates the occupancy state with a valid value', () => {
  const state = createParkingState();
  const beforeUpdate = state.lastUpdated;

  updateParkingOccupancy(state, 21);

  assert.equal(state.occupiedSpots, 21);
  assert.equal(state.totalSpots, 40);
  assert.notEqual(state.lastUpdated, beforeUpdate);
});

test('rejects invalid occupancy values', () => {
  const state = createParkingState();

  assert.throws(() => updateParkingOccupancy(state, -1), RangeError);
  assert.throws(() => updateParkingOccupancy(state, 41), RangeError);
  assert.throws(() => updateParkingOccupancy(state, 2.5), TypeError);
});