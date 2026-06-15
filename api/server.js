const http = require('http');

const {
  createParkingState,
  getOccupancySnapshot,
  updateParkingOccupancy,
} = require('./parkingService');

const parkingState = createParkingState();

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
  });
  response.end(JSON.stringify(payload, null, 2));
}

const server = http.createServer((request, response) => {
  if (request.method === 'GET' && request.url === '/health') {
    return sendJson(response, 200, { status: 'ok', service: 'parking-api-demo' });
  }

  if (request.method === 'GET' && request.url === '/api/parking/occupancy') {
    return sendJson(response, 200, getOccupancySnapshot(parkingState));
  }

  if (request.method === 'POST' && request.url === '/api/parking/occupancy') {
    const chunks = [];

    request.on('data', (chunk) => {
      chunks.push(chunk);
    });

    request.on('end', () => {
      try {
        const body = chunks.length ? JSON.parse(Buffer.concat(chunks).toString('utf8')) : {};
        updateParkingOccupancy(parkingState, body.occupiedSpots);

        return sendJson(response, 200, {
          message: 'Occupancy updated for demo purposes.',
          state: getOccupancySnapshot(parkingState),
        });
      } catch (error) {
        const message = error instanceof RangeError || error instanceof TypeError
          ? error.message
          : 'Invalid JSON payload';

        return sendJson(response, 400, { error: message });
      }
    });

    return;
  }

  sendJson(response, 404, { error: 'Not found' });
});

const port = process.env.PORT || 3001;

if (require.main === module) {
  server.listen(port, () => {
    console.log(`Parking API demo listening on port ${port}`);
    console.log('[T-20][API Demo] branch update confirmed');
  });
}

module.exports = {
  sendJson,
  server,
};
