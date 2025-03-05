import http from "node:http";
import { jsonBodyHandler } from "./middlewares/jsonBodyHandler.js";
import { routeHandler } from "./middlewares/routeHandler.js";

const server = http.createServer(async (request, response) => {
  await jsonBodyHandler(request, response);
  routeHandler(request, response);
});

/* Aqui a função fica escutando o servidor */
server.listen(3333);
