const parkingSensors = [
  { id: 'S-01', zone: 'A', occupied: true },
  { id: 'S-02', zone: 'A', occupied: true },
  { id: 'S-03', zone: 'B', occupied: false },
];

function getSensorSnapshot() {
  const occupiedCount = parkingSensors.filter((sensor) => sensor.occupied).length;

  return {
    campus: 'CampusFlow Park',
    capturedAt: new Date().toISOString(),
    occupiedCount,
    freeCount: parkingSensors.length - occupiedCount,
    sensors: parkingSensors,
  };
}

module.exports = {
  getSensorSnapshot,
};
