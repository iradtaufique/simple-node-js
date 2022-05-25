const os = require('os');

// getting the platforam os

console.log(os.platform())

// getting CPU Archtecture
console.log(os.arch())

// getting CPU info
console.log(os.cpus())

// getting free momory

console.log(os.freemem());

// getting total memory
console.log(os.totalmem());

// getting uptime for your system
console.log(os.uptime())