const http = require("http");
const app = require("./config/app");
const {port,env} = require('./config/vars')

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on ${port} ${env}`);
});