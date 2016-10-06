var EventEmitter = require("events");
var util = require("util");

function Ticker()
{
    EventEmitter.call(this);
}

util.inherits(Ticker, EventEmitter);

Ticker.prototype.tick = function(){
    setInterval(()=>{
        this.emit("tick");
        console.log("tick");
       }
     ,1000);
}


var ticker = new Ticker();
ticker.tick();

