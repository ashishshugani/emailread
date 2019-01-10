const express = require('express');
const app = express();

app.use(express.static('public'));

console.log('May Node be with you');

app.listen(process.env.PORT || 3000, function() {
  console.log('listening on wnv')
})

var getIP = require('ipware')().get_ip;
app.use(function(req, res, next) {
    var ipInfo = getIP(req);
    //console.log(ipInfo);
    //res.send(ipInfo);
    // { clientIp: '127.0.0.1', clientIpRoutable: false }
    next();
});

app.get('/', (req, res) => {
  	//res.send('Hello World')
  	//const { headers, method, url } = request;
  	//res.send(ipInfo);
  	//console.log(req.method);
 	//console.log(req.ip);
	//console.log(req.connection.remoteAddress);
	res.redirect("image.html");

})


