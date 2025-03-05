import http from "node:http";
import { jsonBodyHandler } from "./middlewares/jsonBodyHandler.js";

const server = http.createServer(async (request, response) => {
  // Desestruturação do method
  const { method, url } = request;

  await jsonBodyHandler(request, response)

  // Definindo condições para o método GET
  if (method === "GET" && url === "/products") {
    return response.end("Lista de produtos!");
  }

  // Definindo condições para o método POST
  if (method === "POST" && url === "/products") {
    console.log(request.body)
    return response.writeHead(201).end(JSON.stringify(request.body));
  }

  // Caso não entre em nenhum dos ifs acima ele da como rota não encontrada.
  return response.writeHead(404).end("Rota não encontrada");
});

/* Aqui a função fica escutando o servidor */
server.listen(3333);
