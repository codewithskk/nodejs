const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
  console.log('please trun off the motar!');
  setTimeout(()=>{
    console.log('please trun off the motar! its a gentle reminder');
  },3000)
  
});
// myEmitter.emit('event');
console.log("The script is running ");
myEmitter.emit("waterfull")
console.log("The script is still running");
