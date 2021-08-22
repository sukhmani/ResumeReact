let EventEmitter = require("events").EventEmitter;
let myevent = new EventEmitter();
function onlineEventHandler(evt){
console.log("Online Event", evt)
};

process.nextTick(function(){
    myevent.emit("onlineevent",1);
});

process.nextTick(function(){
    myevent.emit("onlineevent",2);
});

myevent.on("onlineevent",onlineEventHandler);
console.log("last line on file");