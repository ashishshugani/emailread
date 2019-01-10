const express = require('express');
const app = express();

console.log('May Node be with you');

app.listen(process.env.PORT, function() {
  console.log('listening on 3000')
})

var getIP = require('ipware')().get_ip;
app.use(function(req, res, next) {
    var ipInfo = getIP(req);
    console.log(ipInfo);
    // { clientIp: '127.0.0.1', clientIpRoutable: false }
    next();
});

app.get('/', (req, res) => {
  	res.send('Hello World')
  	//const { headers, method, url } = request;

  	console.log(req.method);
 	console.log(req.ip);
	console.log(req.connection.remoteAddress);


})


