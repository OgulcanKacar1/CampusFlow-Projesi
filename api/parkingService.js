function createParkingState() {
  return {
    totalSpots: 40,
    occupiedSpots: 17,
    lastUpdated: new Date().toISOString(),
  };
}

function getOccupancySnapshot(parkingState) {
  return {
    totalSpots: parkingState.totalSpots,
    occupiedSpots: parkingState.occupiedSpots,
    availableSpots: parkingState.totalSpots - parkingState.occupiedSpots,
    lastUpdated: parkingState.lastUpdated,
  };
}

function updateParkingOccupancy(parkingState, occupiedSpots) {
  if (!Number.isInteger(occupiedSpots)) {
    throw new TypeError('occupiedSpots must be an integer');
  }

  if (occupiedSpots < 0 || occupiedSpots > parkingState.totalSpots) {
    throw new RangeError('occupiedSpots must be between 0 and totalSpots');
  }

  parkingState.occupiedSpots = occupiedSpots;
  parkingState.lastUpdated = new Date().toISOString();

  return parkingState;
}

module.exports = {
  createParkingState,
  getOccupancySnapshot,
  updateParkingOccupancy,
};