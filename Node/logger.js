const EventEmitter = require('events')
const uuid = require('uuid')

/*
console.log(uuid.v4())
console.log(uuid.v4())
console.log(uuid.v4())
*/

class Logger extends EventEmitter{
    log(msg){
        //call or raise event
        this.emit('message',{id:uuid.v4(), msg })
        //this.emit('message',{id:uuid.v4(), msg:msg }) above line is same
    }
}

module.exports = Logger
