var express = require("express");
var app = express();
app.listen(5050, "localhost",function(error){
    if(error){
        console.log("Error", err);
    }
    else
    {
        console.log("server is live on host:5050");
    }
});