const http = require('http');
const net = require('net');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(`Hello! ${req.method} ${req.url}\n`);
}

const httpServer = http.createServer(requestListener);
httpServer.listen(8080);


const socketServer = net.createServer(function(socket) {
  socket.on('data', (data) => {
    socket.write(data);
  });
});

socketServer.listen(1935);

