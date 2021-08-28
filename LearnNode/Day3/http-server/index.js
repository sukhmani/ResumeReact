var http = require("http");
var fs = require("fs");
 
var server = http.createServer(function(req, res){
    /* console.log(req.url);
    res.end("Hello from HTTP server"); */
    if(req.url === '/'){
        /* res.write("welcome to home page");
        res.end(); */
        let pagedata = fs.readFileSync("public/index.html", "utf-8");
        res.end( pagedata );
    }else{
        let pagedata = fs.readFileSync("public"+req.url, "utf-8");
        res.end(pagedata);
    }
});
 
server.listen(5050,"localhost", function(err){
    if(err){
        console.log("Error : ", err);
    }else{
        console.log("Server is now live on localhost:5050")
    }
})