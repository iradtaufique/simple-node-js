const EventEmitter = require('events');


class MyEmmiter extends EventEmitter{}

// initialize objects
const myEmitter = new MyEmmiter();

// event listeer
myEmitter.on('event', () => console.log('Event trigerred'));

// initialize the event
myEmitter.emit('event');