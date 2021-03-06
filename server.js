'use strict';

const app = require('./lib/app');
const http = require('http');
const port = process.env.PORT || 3000;

require('./lib/mongoose');

const server = http.createServer(app);
server.listen(port, () => {
    console.log('Server is running at', server.address());
});
