 var http = require('http'); 
var options = { hostname: '127.0.0.1',
 port: 3000,
 method: 'POST' };

 var req = http.request(options, function(response){
     var str=''
      response.on('data',function(chunk){
         str+=chunk;
         }); 
         response.on('end', function(){
             console.log(str);
             }); 
            });
             req.on('error', error=>{
                 console.error(error);
                 }); 
                 req.end(); 

                // Client.js var http = require('http'); var options = { hostname: '127.0.0.1', port: 3000, method: 'POST' }; var req = http.request(options, function(response){ var str='' response.on('data',function(chunk){ str+=chunk; }); response.on('end', function(){ console.log(str); }); }); req.on('error', error=>{ console.error(error); }); req.end(); 

                // Server.js const http = require('http'); const hostname = '127.0.0.1'; const port = 3000; const requestListener = function(req,res){ res.statusCode = 200; res.setHeader('Content-Type','text/plain'); if(req.method==='POST'){ res.end('Hello World\n Welcome to Node Js with POST'); }  if(req.method==='GET'){ res.end('Hello World\n Welcome to Node Js with GET'); } } const server = http.createServer(requestListener);  server.listen(port, hostname); 