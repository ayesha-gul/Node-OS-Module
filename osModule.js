let os = require('os');

console.log("here is tthe free Momory in bytes:",+" "+ os.freemem());
console.log("operating system version:", + " " + os.arch());
console.log("Total memory of os:",+ " "+ os.totalmem())
console.log("Host name:", + " "+ os.hostname());
console.log("Temporary Directory:",+ " "+ os.tmpdir());
console.log("type of os:", + " "+ os.type());
console.log("platform:", + " "+ os.platform());
