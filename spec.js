const os=require("os");
console.log("free RAM",os.freemem()/1024/1024/1024)
console.log("total RAM",os.totalmem()/1024/1024/1024)
console.log("version",os.version())
console.log("processor",os.cpus())