 var http = require('http');

 http.createServer(function(req,res){
 	res.writeHead(200,{'Content-Type':'text/html'});
 	res.write('<head><meta charset="utf-8"/></head>');
 	res.end('你好，Roc-J');
 }).listen(3000);

 console.log('Server running at http://localhost:3000');