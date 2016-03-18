
var port = process.env.PORT || 5566;
var logger = require('tracer').console();
var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function(socket){
  socket.on('overtimes',function(data){
    logger.info('overtimes: '+ data);
    socket.emit('overtimes',data); 
  })
  socket.on('event', function(data){
    logger.info('event data: '+ data);
  });
  socket.on('disconnect', function(){
    logger.warn('disconnect socket io server');
  });
});
server.listen(port);
logger.info('server started at: '+ port);
