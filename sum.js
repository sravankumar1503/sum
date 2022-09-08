var a=10;
var b=20;
var c = a + b;
var msg='sum is' +c;
if(c==30){
    msg +='<br/>sum is 30';
}else{
    msg +='<br/>sum is not 30';
}
var http = require('http');
http.createServer(function(request,response){
response.writeHead(200,{'content-type': 'text/html'});
response.end(msg);
}).listen(3000);
console.log("server listening on http://127.0.0.1:3000");