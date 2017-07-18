const server = require("./server.js");
const router = require("./router.js");
const requests = require("./mysql.js");

let handle = requests.get;

server.start(router.route, handle);