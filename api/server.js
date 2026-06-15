const http = require('http');

const parkingState = {
  totalSpots: 40,
  occupiedSpots: 17,
  lastUpdated: new Date().toISOString(),
};

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
  });
  response.end(JSON.stringify(payload, null, 2));
}

const server = http.createServer((request, response) => {
  console.log(`[T-20][API Demo] ${request.method} ${request.url}`);

  if (request.method === 'GET' && request.url === '/health') {
    console.log('[T-20][API Demo] health check served');
    return sendJson(response, 200, { status: 'ok', service: 'parking-api-demo' });
  }

  if (request.method === 'GET' && request.url === '/api/parking/occupancy') {
    return sendJson(response, 200, {
      totalSpots: parkingState.totalSpots,
      occupiedSpots: parkingState.occupiedSpots,
      availableSpots: parkingState.totalSpots - parkingState.occupiedSpots,
      lastUpdated: parkingState.lastUpdated,
    });
  }

  if (request.method === 'POST' && request.url === '/api/parking/occupancy') {
    const chunks = [];

    request.on('data', (chunk) => {
      chunks.push(chunk);
    });

    request.on('end', () => {
      try {
        const body = chunks.length ? JSON.parse(Buffer.concat(chunks).toString('utf8')) : {};
        if (typeof body.occupiedSpots === 'number') {
          parkingState.occupiedSpots = body.occupiedSpots;
        }
        parkingState.lastUpdated = new Date().toISOString();

        console.log('[T-20][API Demo] occupancy updated', {
          occupiedSpots: parkingState.occupiedSpots,
          availableSpots: parkingState.totalSpots - parkingState.occupiedSpots,
        });

        return sendJson(response, 200, {
          message: 'Occupancy updated for demo purposes.',
          state: parkingState,
        });
      } catch (error) {
        return sendJson(response, 400, { error: 'Invalid JSON payload' });
      }
    });

    return;
  }

  sendJson(response, 404, { error: 'Not found' });
});

const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(`Parking API demo listening on port ${port}`);
});
